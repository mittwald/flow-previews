import{r as h,j as r}from"./iframe-B4mFuudk.js";import{am as m,C as g}from"./TimeField-DjPbBOUL.js";import{L as u}from"./Label-J-Qj-TlD.js";import{B as C}from"./Button-D2oQPT9j.js";import{s as w}from"./IconWarning-BO1YoHSl.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-C4qYIeXY.js";import"./mergeRefs-CRoU7Hf_.js";import"./index-BF6bNSpW.js";import"./clsx-B-dksMZM.js";import"./Accordion-CQ4jhonX.js";import"./dynamic-d3DzbtXD.js";import"./Section-B901pmSP.js";import"./context-BaYvtgUx.js";import"./Button-D_IfTLYp.js";import"./utils-DO9siV10.js";import"./ProgressBar-B9w8hpj9.js";import"./Hidden-DEoNA7g6.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-woxbYNKN.js";import"./useFocusRing-Dzyc8_rZ.js";import"./useFocusable-CR7CXVdU.js";import"./RSPContexts-D4gsSVcd.js";import"./Collection-CRJOH9N4.js";import"./CollectionBuilder-BrBYWzEj.js";import"./SelectionIndicator-Cqxoh0Vk.js";import"./Separator-B1GSGo-v.js";import"./browser-CSkgXx8X.js";import"./useLocalizedStringFormatter-CJ3DiWc4.js";import"./useStatic-BNYxoolq.js";import"./ActionGroup-Dj0mL2jT.js";import"./Alert-BB7E6FS3.js";import"./AlertIcon-C2Iuu0oW.js";import"./AlertBadge-wyAf4fmW.js";import"./Text-DWXiWYJa.js";import"./EmulatedBoldText-ekl0jVcs.js";import"./Align-tZTYN3_b.js";import"./Popover-EGtBkPGT.js";import"./OverlayTrigger-CxsOgof7.js";import"./TableFooterRow-CF-vtEUL.js";import"./SkeletonText-DYF2L0Gp.js";import"./Avatar-DprwA7VB.js";import"./AvatarStack-DFjdUU0I.js";import"./Badge-DdfeDcq0.js";import"./BigNumber-COKiSbmh.js";import"./Breadcrumb-UixRFNtG.js";import"./Link-dZEW6xbR.js";import"./Heading-x5KcgVW6.js";import"./Legend-D4fqLvje.js";import"./FileCardList-C5pL1TS8.js";import"./Image-C9RETtXb.js";import"./Color-Cnkc4JS2.js";import"./Content-DOFb4Tg_.js";import"./ContextualHelpTrigger-BgOAUkgy.js";import"./CounterBadge-BmaHzZVn.js";import"./remote-CQQC7IgA.js";import"./DonutChart-fIzr5YTw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPYu5cLC.js";import"./Header-CWN3vvSw.js";import"./Initials-CasgJWHt.js";import"./InlineCode-CBZ_IXgo.js";import"./PopoverTrigger-DfcR0Zu9.js";import"./LoadingSpinner-CkjsGIz-.js";import"./Separator-BY2NZtun.js";import"./Message-B0duh_V_.js";import"./MessageSeparator-D92QLxsc.js";import"./NavigationGroup-uDY_S4HN.js";import"./Notification-DAh0wl5H.js";import"./NotificationProvider-CUaHGM3W.js";import"./ProgressBar-DQXT7cgB.js";import"./Rating-IIMHkWv7.js";import"./Skeleton-CXrytUBj.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
