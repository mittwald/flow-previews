import{r as h,j as r}from"./iframe-DRHo_LWV.js";import{ao as m,C as g}from"./TimeField-B_HIbzDf.js";import{L as u}from"./Label-AMkNKrE4.js";import{B as C}from"./Button-CoKi_833.js";import{t as w}from"./IconWarning-DOCSYVJb.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-eT31IdA5.js";import"./mergeRefs-ClO07P9v.js";import"./index-BxEgcTyQ.js";import"./clsx-B-dksMZM.js";import"./Accordion-Droib5ZD.js";import"./dynamic-D3Z_5L-h.js";import"./Section-BepYC6c-.js";import"./context-B26OnoB_.js";import"./Button-CPvHspkD.js";import"./utils-BMeX6kjI.js";import"./ProgressBar-CAz_kUXs.js";import"./Hidden-IGMaJsur.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DFFtEKCN.js";import"./useFocusRing-D0-Omahw.js";import"./useFocusable-Bpejanxv.js";import"./RSPContexts-CCSm4UT8.js";import"./Collection-dKICFTeR.js";import"./CollectionBuilder-BKsjvRDC.js";import"./SelectionIndicator-D9ZkMsqt.js";import"./Separator-BclQH7dY.js";import"./browser-BUXnAcqH.js";import"./useLocalizedStringFormatter-DBrevv4a.js";import"./useStatic-DSG2Vd8Y.js";import"./ActionGroup-BJPHeF0U.js";import"./Alert-BrLW18t8.js";import"./AlertIcon-Db-Zh-lA.js";import"./AlertBadge-D9yH7rZh.js";import"./Text-C8Z4-t3h.js";import"./EmulatedBoldText-B9Wwr1Zx.js";import"./Align-6v3SCJ3p.js";import"./Popover-BQgBoj25.js";import"./OverlayTrigger-DqaZeyEn.js";import"./TableFooterRow-CBxQ079v.js";import"./SkeletonText-CvydbgeP.js";import"./Avatar-_7zeFz8_.js";import"./AvatarStack-CBG1tO2U.js";import"./Badge-BJlVMabo.js";import"./BigNumber-CJ9-Wooc.js";import"./Breadcrumb-BVcz-IL9.js";import"./Link-C63VPDP4.js";import"./Heading-DXCu3xfs.js";import"./Legend-B9gsZERq.js";import"./FileCardList-DyPlSIwt.js";import"./Image-DxrW6BFv.js";import"./Color-CDrqKcSm.js";import"./Content-hq-FzB-y.js";import"./ContextualHelpTrigger-DKjAVjgi.js";import"./CounterBadge-fUD2-v8M.js";import"./DonutChart-Dyw35JTN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-6-OTG4lb.js";import"./Header-DxKAYmWZ.js";import"./Initials-DwskPZku.js";import"./InlineCode-BLBJzgMQ.js";import"./PopoverTrigger-RQrqTxsS.js";import"./LoadingSpinner-Bk5B-2KR.js";import"./Separator-BgjeAa1-.js";import"./Message-Ji74Yk1U.js";import"./MessageSeparator-DIqoqc2T.js";import"./NavigationGroup-D8tcv3W_.js";import"./Notification-C8xMDKXr.js";import"./NotificationProvider-yYltR2ZZ.js";import"./ProgressBar-13l5oasV.js";import"./Rating-UxQEt7zP.js";import"./Skeleton-DUrZDWEK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
