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
import ShimmerView from '../../components/ShimmerView/ShimmerView';
import Images from '../../constants/images';

class PokeList extends React.PureComponent {
  componentDidMount() {
    if (!this.props.pokemons.length) {
      this.getPokeList(null, LoadingStatus.loading);
    }
  }

  keyExtractor = data => (data.pkdx_id) || 0;

  getPokeList = (queryLimit, loading = LoadingStatus.moreLoading) => {
    const { actions, limit } = this.props;
    actions.pokeListRequest({
      limit: queryLimit || limit,
      loading
    });
  };

  showPokemonDetail = (pokemon, id) => {
    this[`pokemon-${id}`].image.measure((x, y, width, height, pageX, pageY) => {
      this.pokemonDetailRef.openPokemonDetail(
        true,
        { width, height, x: pageX, y: pageY },
        pokemon
      );
    });
  };

  renderFilter = () => {
    return <Filter onFilterList={this.getPokeList} limit={this.props.limit} />;
  };

  renderLoadingMore = () => {
    if (LoadingStatus.moreLoading) {
      return (
        <ShimmerView
          imgStyle={styles.shimmerImg}
          total={1}
          imgPath={Images.pokemonShimmer}
        />
      );
    }
    return null;
  };

  renderPokeItem = ({ item }) => {
    return (
      <Pokemon
        key={item.pkdx_id}
        ref={ref => (this[`pokemon-${item.pkdx_id}`] = ref)}
        pokemon={item}
        showPokemonDetail={this.showPokemonDetail}
      />
    );
  };

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
          numColumns={2}
          renderItem={this.renderPokeItem}
          extraData={loading}
          ListHeaderComponent={this.renderFilter}
          ListFooterComponent={this.renderLoadingMore}
          keyExtractor={this.keyExtractor}
          onEndReached={()=>this.getPokeList()}
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
