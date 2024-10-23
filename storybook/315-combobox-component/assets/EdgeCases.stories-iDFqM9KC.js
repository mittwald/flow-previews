import{R as t}from"./index-Cs7sjTYM.js";import{a as g,C as d,M as o}from"./ContextMenuTrigger-Bis7FOY1.js";import{B as x}from"./Button-BuU2L9Cz.js";import M from"./Default.stories-BSvQTrb3.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./flowComponent-BPK-Va1R.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./index-Cf-03bMR.js";import"./Popover-7GUZlquZ.js";import"./OverlayTrigger-C9c93hgx.js";import"./utils-Cd8r7pc9.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-Tk1JcXPS.js";import"./useFocusRing-CT1maULe.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-BCyoy2Gl.js";import"./FocusScope-jamPpPQB.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-cynug30a.js";import"./context-BQrxIDoz.js";import"./useSelector-CsJYK-4v.js";import"./Action-BLvIsTIa.js";import"./Text-Cd3nXJGb.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-B6hDZZIl.js";import"./IconWarning-Drpj9upb.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";import"./Separator-ZOqStrt8.js";import"./useMenuTrigger-DIvY8hzH.js";import"./SelectionManager-CSNpQkfm.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-C99EnWuo.js";import"./LoadingSpinner-CgFD_RmC.js";import"./Button-DzOzTnc5.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Separator-CjN-M4fA.js";import"./Heading-B2P7mSpw.js";import"./Heading-CG14-WVD.js";import"./Section-Dpiuksy_.js";const yt={...M,title:"Actions/ContextMenu/Edge Cases"},e={args:{width:400},render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},t.createElement(o,null,n.medium),t.createElement(o,null,n.medium)))},r={render:m=>t.createElement(g,null,t.createElement(x,null,"Trigger"),t.createElement(d,{...m},Array(20).fill("").map((T,i)=>t.createElement(o,{key:i},"Item ",i+1))))};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    width: 400
  },
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Bt=["LongTexts","LongList"];export{r as LongList,e as LongTexts,Bt as __namedExportsOrder,yt as default};
