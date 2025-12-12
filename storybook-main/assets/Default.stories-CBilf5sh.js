import{r as h,j as r}from"./iframe-Ckegua2-.js";import{ao as m,C as g}from"./TimeField-CnyVG1v1.js";import{L as u}from"./Label-DbzN7GKj.js";import{B as C}from"./Button-DoXsYGKN.js";import{t as w}from"./IconWarning-Gc4Ng5zo.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-B0wHrVrI.js";import"./mergeRefs-CXKhTFR6.js";import"./index-CxQn1E-Y.js";import"./clsx-B-dksMZM.js";import"./Accordion-B_N1C8pF.js";import"./dynamic-6Flvv8a3.js";import"./Section-hzyeLE3m.js";import"./context-CF7hXZMA.js";import"./Button-DWZpmyCC.js";import"./utils-CYmNuJtI.js";import"./ProgressBar-DIFZ8Kql.js";import"./Hidden-kHVBbfV7.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dskisrvm.js";import"./useFocusRing-BMhGy4sM.js";import"./useFocusable-oEaC2Y8Z.js";import"./RSPContexts-B2_NTObV.js";import"./Collection-ezizCYTp.js";import"./CollectionBuilder-BabOu3fh.js";import"./SelectionIndicator-BgkqkO5H.js";import"./Separator-B9FzUmmI.js";import"./browser-CQVzEu0I.js";import"./useLocalizedStringFormatter-Q4I4FS-7.js";import"./useStatic-CoW39G77.js";import"./ActionGroup-BqOUYrfn.js";import"./Alert-JZD3v-jA.js";import"./AlertIcon-Dy5HewGT.js";import"./AlertBadge-CARGCkX2.js";import"./Text-Bc5eZX2G.js";import"./EmulatedBoldText-DGrw2Xfi.js";import"./Align-Dm8_YoZ3.js";import"./Popover-D8pa3B3p.js";import"./OverlayTrigger-DO7Mueac.js";import"./TableFooterRow-CHZHJv30.js";import"./SkeletonText-BLLVdmDs.js";import"./Avatar-B-hMO_N2.js";import"./AvatarStack-C33GWe6X.js";import"./Badge-DMon6P2Z.js";import"./BigNumber-CA9AE9Qf.js";import"./Breadcrumb-DXpAsBUS.js";import"./Link-D6ZKnidg.js";import"./Heading-CD3Wslox.js";import"./Legend-pYfOY7A3.js";import"./FileCardList-CcmxMc-_.js";import"./Image-B-kLfcch.js";import"./Color-BRQcMNt3.js";import"./Content-Dg-EjuzS.js";import"./ContextualHelpTrigger-CXW4Wy_s.js";import"./CounterBadge-BSnWWYKA.js";import"./DonutChart-Df00Mh3q.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DlPxXhrq.js";import"./Header-DFUpbH_h.js";import"./Initials-C9kUHQxR.js";import"./InlineCode-CKyRvQPe.js";import"./PopoverTrigger-Cbnk17aQ.js";import"./LoadingSpinner-Cp0jDW5T.js";import"./Separator-CpyG2-QQ.js";import"./Message-hrhHm_Tz.js";import"./MessageSeparator-C9EaqawW.js";import"./NavigationGroup-gYW7EtWF.js";import"./Notification-Cb_wPwY7.js";import"./NotificationProvider-DMKJ6Z2r.js";import"./ProgressBar-BEYlfi9a.js";import"./Rating-Bth5rzY2.js";import"./Skeleton-Beogy4tJ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
