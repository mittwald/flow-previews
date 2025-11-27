import{r as h,j as r}from"./iframe-CW_1kzn8.js";import{am as m,C as g}from"./TimeField-O8dBCN92.js";import{L as u}from"./Label-C6A80iGS.js";import{B as C}from"./Button-DG8ItREn.js";import{t as w}from"./IconWarning-CwkyBxVN.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-BDCYw1pg.js";import"./mergeRefs-Y3najUVW.js";import"./index-Bd-98hnG.js";import"./clsx-B-dksMZM.js";import"./Accordion-C2JQB3aN.js";import"./dynamic-CvIdWWig.js";import"./Section-BtQd622a.js";import"./context-FK80ZNI-.js";import"./Button-CKDlZl9E.js";import"./utils-DECz7q9i.js";import"./ProgressBar-BTbyCbiz.js";import"./Hidden-CnRTwBiV.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-g9M5CTWm.js";import"./useFocusRing-DZCmxJCl.js";import"./useFocusable-f0CtUOQy.js";import"./RSPContexts-jLoiaaIz.js";import"./Collection-FH8-xfMl.js";import"./CollectionBuilder-NWtLcMXl.js";import"./SelectionIndicator-CiCiu2c2.js";import"./Separator-DjsPzP3_.js";import"./browser-DYjBW3Mh.js";import"./useLocalizedStringFormatter-EKrbiiaf.js";import"./useStatic-CyHKbDme.js";import"./ActionGroup-CMigRbOL.js";import"./Alert-wmQE4eTZ.js";import"./AlertIcon-C9ZLFLyq.js";import"./AlertBadge-DK8CoaVP.js";import"./Text-Bt12Aiuy.js";import"./EmulatedBoldText-CjYCMvu1.js";import"./Align-BVXc73zR.js";import"./Popover-CZewF29V.js";import"./OverlayTrigger-DXi_dQZe.js";import"./TableFooterRow-Dz133oSH.js";import"./SkeletonText-bNjOl8Lj.js";import"./Avatar-nxK6ayEs.js";import"./AvatarStack-C5K3zfKN.js";import"./Badge-B4vhdI6d.js";import"./BigNumber-BCtOXUOq.js";import"./Breadcrumb-UN90IgbC.js";import"./Link-BjJvsD30.js";import"./Heading-BDPW60Tv.js";import"./Legend-Dv9medtK.js";import"./FileCardList-BzJWWuzT.js";import"./Image-B8909EtY.js";import"./Color-yZsfwNHB.js";import"./Content-NVky5ofe.js";import"./ContextualHelpTrigger-NzhCC0hh.js";import"./CounterBadge-DRnfRmyT.js";import"./DonutChart-DfWQ2yNh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_-uwk5j.js";import"./Header-CIgs80Lw.js";import"./Initials-CtZJGVAE.js";import"./InlineCode-BUUGDwVl.js";import"./PopoverTrigger-C7J2NazX.js";import"./LoadingSpinner-DDEfeVZt.js";import"./Separator-CSUhftqZ.js";import"./Message-gD0LEZWb.js";import"./MessageSeparator-f8F7ZaUG.js";import"./NavigationGroup-kj_r2PG6.js";import"./Notification-Fp2frcIZ.js";import"./NotificationProvider-Cm0Lnyko.js";import"./ProgressBar-CKvf8kaJ.js";import"./Rating-BH2oI4ZI.js";import"./Skeleton-BlS-zqmu.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Mr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Mr as __namedExportsOrder,Ir as default};
