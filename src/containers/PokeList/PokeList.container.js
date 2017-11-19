import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './PokeList.styles';
import Button from '../../components/Button/Button';
import { pokeListRequest } from './PokeList.actions';
import Pokemon from '../../components/Pokemon/Pokemon';
import PokemonDetailModal from './view/Pokemon.DetailModal.component';
import Filter from './view/PokeList.Filter.component';
import LoadingStatus from '../../constants/loadingStatus';
import _ from 'lodash';
import ShimmerView from '../../components/ShimmerView/ShimmerView';
import Images from '../../constants/images';

class PokeList extends React.PureComponent {
  constructor(props) {
    super(props);
    _.bindAll(this, [
      'renderPokeItem',
      'showPokemonDetail',
      'renderFilter',
      'getPokeList',
      'renderLoadMore'
    ]);
  }

  componentDidMount() {
    if (!this.props.pokemons.length) {
      this.getPokeList(null, LoadingStatus.loading);
    }
  }

  keyExtractor = data => (data && data[0].pkdx_id) || 0;

  getPokeList(queryLimit, loading = LoadingStatus.moreLoading) {
    const { actions, limit } = this.props;
    actions.pokeListRequest({
      limit: queryLimit || limit,
      loading
    });
  }

  showPokemonDetail(pokemon, id) {
    console.log("this[`pokemon-${id}`].image", this[`pokemon-${id}`].image)
    this[`pokemon-${id}`].image.measure((x, y, width, height, pageX, pageY) => {
      console.log("x, y, width, height, pageX, pageY", x, y, width, height, pageX, pageY)
      this.pokemonDetailRef.openPokemonDetail(
        true,
        { width, height, x: pageX, y: pageY },
        pokemon
      );
    });
  }

  renderFilter() {
    return <Filter onFilterList={this.getPokeList} limit={this.props.limit} />;
  }

  renderLoadMore() {
    if (LoadingStatus.moreLoading === this.props.loading) {
      return (
        <ShimmerView
          imgStyle={styles.shimmerImg}
          total={1}
          imgPath={Images.pokemonShimmer}
        />
      );
    }
    return (
      <Button
        btnStyle={styles.loadMoreBtn}
        txtStyle={styles.loadMoreTxt}
        title={'Load More'}
        onPress={this.getPokeList}
      />
    );
  }

  renderPokeItem({ item }) {
    return (
      <View style={styles.row}>
        {_.map(item, pokemon => (
          <Pokemon
            key={pokemon.pkdx_id}
            ref={ref => (this[`pokemon-${pokemon.pkdx_id}`] = ref)}
            pokemon={pokemon}
            showPokemonDetail={this.showPokemonDetail}
          />
        ))}
      </View>
    );
  }

  render() {
    const { pokemons, loading } = this.props;
    return (
      <View style={styles.container}>
        {loading === LoadingStatus.loading && (
          <ShimmerView
            imgStyle={styles.shimmerImg}
            total={5}
            imgPath={Images.pokemonShimmer}
            contentSpace={12}
          />
        )}
        <PokemonDetailModal ref={ref => (this.pokemonDetailRef = ref)} />
        <FlatList
          data={pokemons}
          renderItem={this.renderPokeItem}
          extraData={loading}
          ListHeaderComponent={this.renderFilter}
          ListFooterComponent={this.renderLoadMore}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }

  static navigationOptions = {
    title: 'Poke List'
  };
}

const mapStateToProps = state => ({
  pokemons: state.pokeList.pokemons,
  limit: state.pokeList.limit,
  loading: state.pokeList.loading
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      pokeListRequest
    },
    dispatch
  )
});

PokeList.propTypes = {
  pokemons: PropTypes.array,
  limit: PropTypes.number,
  actions: PropTypes.object,
  loading: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
