import{r as h,j as r}from"./iframe-2LgrIkRd.js";import{am as m,C as g}from"./TimeField-D5pHgFYZ.js";import{L as u}from"./Label-DREYQWel.js";import{B as C}from"./Button-Cq_XMZKZ.js";import{t as w}from"./IconWarning-D60ymTiJ.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-Dvn5KZwR.js";import"./mergeRefs-BKadv8uE.js";import"./index-KXg12Vs8.js";import"./clsx-B-dksMZM.js";import"./Accordion-CyEZGz5t.js";import"./dynamic-DCrPXVv3.js";import"./Section-BlB_8KjT.js";import"./context-lHzLNF7G.js";import"./Button-EKWPB4tZ.js";import"./utils-BnxtooML.js";import"./ProgressBar-DflgbsT0.js";import"./Hidden-8HkCLqkF.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CE6tX24V.js";import"./useFocusRing-DVyMMICP.js";import"./useFocusable-DWcchIDQ.js";import"./RSPContexts-Dor-CtSJ.js";import"./Collection-CsQEIojc.js";import"./CollectionBuilder-CXt63XdS.js";import"./SelectionIndicator-BqSKYRxe.js";import"./Separator-DQkcls0b.js";import"./browser-DE_neHhx.js";import"./useLocalizedStringFormatter-dwl9VKwt.js";import"./useStatic-yAY0kCCB.js";import"./ActionGroup-ByO56kJD.js";import"./Alert-fpXXpeEV.js";import"./AlertIcon-5TMA0R6D.js";import"./AlertBadge-DD7luv0F.js";import"./Text-CmoFb8XW.js";import"./EmulatedBoldText-DybYTyQs.js";import"./Align-C4SFZ7ME.js";import"./Popover-BsRqhSlP.js";import"./OverlayTrigger-CbpE00TN.js";import"./TableFooterRow-CUlgLSqo.js";import"./SkeletonText-BGsYoe3X.js";import"./Avatar-C4UmcXDE.js";import"./AvatarStack-B-BstC3Q.js";import"./Badge-BgCXtZ0L.js";import"./BigNumber-CVZSlJts.js";import"./Breadcrumb-C_L5ewoM.js";import"./Link-BdaxMzeJ.js";import"./Heading-DilTAoZJ.js";import"./Legend-fylTc-bA.js";import"./FileCardList-CrJP7G2S.js";import"./Image-OXpu_gFV.js";import"./Color-BYYxr454.js";import"./Content-NoHT_5O2.js";import"./ContextualHelpTrigger-TtfataTj.js";import"./CounterBadge-CFnk4a6U.js";import"./DonutChart-DInnhXKC.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-S15YJh2T.js";import"./Header-DRDABVjU.js";import"./Initials-CWWZSIcH.js";import"./InlineCode-FHoqqrut.js";import"./PopoverTrigger-Cj-rCTR6.js";import"./LoadingSpinner-C9JNq8vi.js";import"./Separator-Bqiy7SnE.js";import"./Message-cn2BI7mT.js";import"./MessageSeparator-CfbbRyt-.js";import"./NavigationGroup-DuKvOMC6.js";import"./Notification-BGXUVOCQ.js";import"./NotificationProvider-Cexjnfj1.js";import"./ProgressBar-D0rsyG47.js";import"./Rating-IUsLANbY.js";import"./Skeleton-TGcUA8kF.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
