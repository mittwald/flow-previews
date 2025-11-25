import{r as h,j as r}from"./iframe-C7sy8eLt.js";import{ao as m,d as g}from"./Modal-CgkmliK_.js";import{L as u}from"./Label-rfHe5hPU.js";import{B as C}from"./Button-BZw3q7YG.js";import{x as w}from"./IconWarning-BlJBP8EW.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-xNYmGRJM.js";import"./flowComponent-DIjd7Mwu.js";import"./index-Cpqj0oV0.js";import"./index-CQGWyvrR.js";import"./context-cT4ej6gr.js";import"./Button-Dbk_q6kB.js";import"./utils-ClB0n4MX.js";import"./ProgressBar-DVj1Bza0.js";import"./Hidden-BiwDbxQo.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CzQbumPb.js";import"./useFocusRing-Ah8T3Rlp.js";import"./useFocusable-BdiuUyMg.js";import"./RSPContexts-BXBNaV8B.js";import"./Collection-Bs_bKP_m.js";import"./CollectionBuilder--gmJ_NYC.js";import"./SelectionIndicator-BYKIsOg-.js";import"./Separator-BY5kq_RL.js";import"./browser-BbONOrP3.js";import"./useLocalizedStringFormatter-CTGu5obF.js";import"./useStatic-C3MBsJUa.js";import"./FileCardList-BcoXYZaJ.js";import"./Avatar-pqiTjDaw.js";import"./AlertIcon-pdEEQLjK.js";import"./Image-BzosvY75.js";import"./Text-CNjgj0Nh.js";import"./EmulatedBoldText-D386pHKZ.js";import"./Link-CYOMmfe5.js";import"./ControlledNotification-1haiwG2D.js";import"./LoadingSpinner-DOZFO_5L.js";import"./Flex-Cery0S_5.js";import"./Accordion-CYXfOEtJ.js";import"./Section-B_6olPV1.js";import"./ActionGroup-Bou60yfQ.js";import"./Alert-CuOVoIP4.js";import"./AlertBadge-DbgGv4eB.js";import"./Align-BlvYLRO8.js";import"./AvatarStack-CXX7ZouY.js";import"./BigNumber-D9-VIDaq.js";import"./Breadcrumb-B3K0GN86.js";import"./Heading-k3TZmz5u.js";import"./Legend-D0oOrj9r.js";import"./Color-Ds7_816d.js";import"./TableFooterRow-yox3njQ3.js";import"./SkeletonText-oFV3v-ow.js";import"./Content--Il2Vbk0.js";import"./CounterBadge-sYYq6djQ.js";import"./DonutChart-Bw97G3qW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvMkVg-s.js";import"./Header-DwdbIsc5.js";import"./Initials-nwj7pVwk.js";import"./InlineCode-fcdnehc6.js";import"./LayoutCard-YIuI0q1W.js";import"./Separator-CnXIIkpp.js";import"./MessageSeparator-BAFFdBEb.js";import"./NavigationGroup-MvGeIrOF.js";import"./Notification-BKYjv64k.js";import"./NotificationProvider-NTC8P3ww.js";import"./ProgressBar-gRP8sWKC.js";import"./Rating-BnzoQ1_w.js";import"./Skeleton-D46xLN5H.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Er=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,i as WithCustomButtons,a as WithPlaceholder,Er as __namedExportsOrder,yr as default};
