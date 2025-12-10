import{r as h,j as r}from"./iframe-C7yh_Fu5.js";import{am as m,C as g}from"./TimeField-Dy-rfgDv.js";import{L as u}from"./Label-oyZIArrA.js";import{B as C}from"./Button-BwVKQ9X7.js";import{t as w}from"./IconWarning-U8_aSafZ.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-C-EG-5z2.js";import"./mergeRefs-g85mVkDf.js";import"./index-Cevz_HyD.js";import"./clsx-B-dksMZM.js";import"./Accordion-D4DEJSnq.js";import"./dynamic-BAOBaIPk.js";import"./Section-eGYkYIra.js";import"./context-w3GWYnpb.js";import"./Button-iBtMEWbi.js";import"./utils-BIDryOLh.js";import"./ProgressBar-hejX-OOI.js";import"./Hidden-Du0bIFmN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CEhtXY7m.js";import"./useFocusRing-C2uVCvlL.js";import"./useFocusable-CCwjyRCK.js";import"./RSPContexts-DMbDFkhS.js";import"./Collection-BgKMjwD7.js";import"./CollectionBuilder-DKESVVhe.js";import"./SelectionIndicator-Bux7VXrO.js";import"./Separator-Di2JOJWZ.js";import"./browser-DU0Se26V.js";import"./useLocalizedStringFormatter-DQ2_29OK.js";import"./useStatic-BPJ4UqdO.js";import"./ActionGroup-DnTsE6iz.js";import"./Alert-BD9-BdYZ.js";import"./AlertIcon-2MV1Vkb6.js";import"./AlertBadge-D2DN6G_u.js";import"./Text-CSanHafV.js";import"./EmulatedBoldText-CiGN-vVw.js";import"./Align-H7fb-fs1.js";import"./Popover-CQFnWxW5.js";import"./OverlayTrigger-D2xYBiFg.js";import"./TableFooterRow-CVFXLu5s.js";import"./SkeletonText-DnggfzER.js";import"./Avatar-CxKCuxf-.js";import"./AvatarStack-CuhKRn3f.js";import"./Badge-CrGIL66e.js";import"./BigNumber-DhmUzvWc.js";import"./Breadcrumb-0czp_nKF.js";import"./Link-DWHk52qz.js";import"./Heading-gezzzJQU.js";import"./Legend-CBzh6EDX.js";import"./FileCardList-BcFGfAyG.js";import"./Image-CciUOm_j.js";import"./Color-B2lIhlIc.js";import"./Content-CL7mIcPh.js";import"./ContextualHelpTrigger-B1UysYmx.js";import"./CounterBadge-DOJFQA8N.js";import"./DonutChart-PBUZonP2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-VCS6qRmj.js";import"./Header-C9QET4gC.js";import"./Initials-28ES132L.js";import"./InlineCode-xv-tSnAa.js";import"./PopoverTrigger-C9LEo84-.js";import"./LoadingSpinner-4S8XnzlY.js";import"./Separator-oc_HtEXN.js";import"./Message-BiBJDh9p.js";import"./MessageSeparator-DJOJRQwh.js";import"./NavigationGroup-kwM4BGZf.js";import"./Notification-DLYTxmIW.js";import"./NotificationProvider-BR-b_KFd.js";import"./ProgressBar-BczdTP0z.js";import"./Rating-DCrUaEZd.js";import"./Skeleton-fkyP2s-f.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
