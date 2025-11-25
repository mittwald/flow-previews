import{j as r,r as C}from"./iframe-C2UJ9G9V.js";import{T as t,x as h,F as R}from"./Modal-C3GlUU69.js";import{L as o}from"./Label-BBN4mcuG.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-CtYtQruH.js";import"./flowComponent-BtVUgkFH.js";import"./index-CG7Nx2SL.js";import"./index-CuKGAAd3.js";import"./context-BIEfUQ2p.js";import"./Button-ubiq7Xl0.js";import"./utils-ZVY4AxNZ.js";import"./ProgressBar-ClZTUzWw.js";import"./Hidden-3aP1klpL.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-2O4QHQV-.js";import"./useFocusRing-Di5E6gYC.js";import"./useFocusable-xso9xERq.js";import"./RSPContexts-Hx65IcT5.js";import"./Collection-Bq2Hdn5d.js";import"./CollectionBuilder-CT2X_xMF.js";import"./SelectionIndicator-NBUBArhq.js";import"./Separator-BRqnt4hv.js";import"./browser-CXIjdJ2N.js";import"./useLocalizedStringFormatter-Cj5LaI8a.js";import"./useStatic-CnL7CFtT.js";import"./FileCardList-Bg7rGpmm.js";import"./IconWarning-DZ2M7osE.js";import"./Avatar-CotRFKhH.js";import"./AlertIcon-BbdcFEUV.js";import"./Image-tSUEQh2P.js";import"./Text-BmY25DFr.js";import"./EmulatedBoldText-T6xRvrrg.js";import"./Link-Ly3EXSZu.js";import"./Button-yv3wqtk5.js";import"./LoadingSpinner-bmxeb1W_.js";import"./ControlledNotification-Dern2fya.js";import"./Flex-BEFrt-IQ.js";import"./Accordion-QhUZXNHp.js";import"./Section-CBuaZusl.js";import"./ActionGroup-CNhMYjm6.js";import"./Alert-Ds8X36u1.js";import"./AlertBadge-ZeNZ0VBj.js";import"./Align-D_gCoYIj.js";import"./AvatarStack-CbwTqXtu.js";import"./BigNumber-Cd2Z6V7G.js";import"./Breadcrumb-DAcj-pff.js";import"./Heading-97bPXynU.js";import"./Legend-D3nPJFkg.js";import"./Color-vKPfJuGH.js";import"./TableFooterRow-BuUJOBvV.js";import"./SkeletonText-DO08ACrp.js";import"./Content-DSkO-Fju.js";import"./CounterBadge-D7aLAN66.js";import"./DonutChart-BN1DSipU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-0iALzZOv.js";import"./Header-z3h4vRWi.js";import"./Initials-CJIq7z5p.js";import"./InlineCode-74OZ_Ktz.js";import"./LayoutCard-8TwEToQW.js";import"./Separator-3tE_TyTR.js";import"./MessageSeparator-UlRvzTWs.js";import"./NavigationGroup-gQIxKXiZ.js";import"./Notification-CJ42Iq6R.js";import"./NotificationProvider-C9_-azBV.js";import"./ProgressBar-DJi-krNr.js";import"./Rating-BgPI6MEV.js";import"./Skeleton-qOcpVc7f.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},l={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>{const[F,g]=C.useState("");return r.jsx(t,{...e,value:F,onChange:L=>g(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...u.parameters?.docs?.source}}};const yr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{a as Default,s as Disabled,i as ReadOnly,p as Required,u as ShowCharacterCount,m as WithControlledValue,l as WithDefaultValue,n as WithFieldDescription,c as WithFieldError,d as WithPlaceholder,yr as __namedExportsOrder,qr as default};
