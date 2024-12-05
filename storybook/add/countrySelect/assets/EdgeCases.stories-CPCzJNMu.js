import{m as f,C as a}from"./Default.stories-DBT1lCfb.js";import{R as e}from"./index-B-o1Wr-g.js";import{L as s}from"./Label-_xsP45Rl.js";import{F as D}from"./FieldDescription-fm7iND5v.js";import{F as b}from"./FieldError-BLx6e73A.js";import"./Option-fkCPsYrI.js";import"./PropsContextProvider-DWb7RnwM.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./IconApp-C2QYsCvE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-BujZM4bR.js";import"./index-DolzVqEf.js";import"./IconWarning-CQsN887u.js";import"./Popover-CIILQRB7.js";import"./OverlayTrigger-CfYtoYM2.js";import"./Button-DpaYcQnV.js";import"./utils-CCebJm36.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";import"./Separator-BAc0WD8W.js";import"./Text-CByKVUtS.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./context-Bsk3zKPu.js";import"./useSelector-C0Ru2jd6.js";import"./ListBox-RZ6UiDkV.js";import"./DragAndDrop-1_tMLeAb.js";import"./useListState-DEKbwa90.js";import"./FieldError-CjNivrvv.js";import"./Form-B_VAMaUE.js";import"./useSingleSelectListState-DL4uThJu.js";import"./useFormReset-DMREOE0P.js";import"./Text-B21b7DDf.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";const Le={...f,title:"Form Controls/CountrySelect/Edge Cases"},t={args:{defaultSelectedKey:"XX"},render:r=>e.createElement(a,{...r},e.createElement(s,null,"Country"))},o={render:r=>e.createElement(a,{...r,onSelectionChange:m=>{console.log(`Selected country: ${m}`),alert(`Selected country code: ${m}`)}},e.createElement(s,null,"Country (with logging)"))},n={args:{dachFirst:!0,defaultSelectedKey:"FR"}},i={args:{dachFirst:!0,defaultSelectedKey:"DE",isRequired:!0,isDisabled:!1,className:"custom-class"},render:r=>e.createElement(a,{...r},e.createElement(s,null,"Country"),e.createElement(D,null,"Complete example with all properties"),e.createElement(b,null,"Select a country"))};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultSelectedKey: "XX"
  },
  render: props => <CountrySelect {...props}>
      <Label>Country</Label>
    </CountrySelect>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,C;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <CountrySelect {...props} onSelectionChange={code => {
    console.log(\`Selected country: \${code}\`);
    alert(\`Selected country code: \${code}\`);
  }}>
      <Label>Country (with logging)</Label>
    </CountrySelect>
}`,...(C=(u=o.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var y,S,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    dachFirst: true,
    defaultSelectedKey: "FR"
  }
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var h,E,F;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    dachFirst: true,
    defaultSelectedKey: "DE",
    isRequired: true,
    isDisabled: false,
    className: "custom-class"
  },
  render: props => <CountrySelect {...props}>
      <Label>Country</Label>
      <FieldDescription>Complete example with all properties</FieldDescription>
      <FieldError>Select a country</FieldError>
    </CountrySelect>
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const xe=["NonExistentCountryCode","WithCustomOnChange","WithDachFirstAndDefault","WithAllProps"];export{t as NonExistentCountryCode,i as WithAllProps,o as WithCustomOnChange,n as WithDachFirstAndDefault,xe as __namedExportsOrder,Le as default};
