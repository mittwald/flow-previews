import{r as h,j as r}from"./iframe-C5kwxwrP.js";import{am as m,C as g}from"./TimeField-BYvcgqwg.js";import{L as u}from"./Label-g_jJNVJ9.js";import{B as C}from"./Button-xhQyV7SB.js";import{t as w}from"./IconWarning-DN2_qlIM.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-CTsx1ICl.js";import"./mergeRefs-BjhR6ukN.js";import"./index-D0rH5M4c.js";import"./clsx-B-dksMZM.js";import"./Accordion-_D2E3Sdx.js";import"./dynamic-DeUr6npx.js";import"./Section-CTfCzMjt.js";import"./context-B1WvD-_p.js";import"./Button-BX1O3153.js";import"./utils-ClkSWM7u.js";import"./ProgressBar-BHFhq2aG.js";import"./Hidden-8zKzRoXl.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CDCpqoSP.js";import"./useFocusRing-CedgyfIn.js";import"./useFocusable-BiFYP8le.js";import"./RSPContexts-DRm1Cdpk.js";import"./Collection-OQo4LJVg.js";import"./CollectionBuilder-O5C2uK03.js";import"./SelectionIndicator-Dr4wTiOY.js";import"./Separator-DedkjU77.js";import"./browser-CdNWfkH8.js";import"./useLocalizedStringFormatter-t4fh856H.js";import"./useStatic-BI_2AgVn.js";import"./ActionGroup-KhTdUE8n.js";import"./Alert-CXp9JRJ_.js";import"./AlertIcon-NlAbnesU.js";import"./AlertBadge-DvJ4aslu.js";import"./Text-D7zEodsr.js";import"./EmulatedBoldText-B3gCae9O.js";import"./Align-C7QGDLuz.js";import"./Popover-8f8WewP5.js";import"./OverlayTrigger-Br3xhPgq.js";import"./TableFooterRow-Dmtj36Oo.js";import"./SkeletonText-BOPkQIJz.js";import"./Avatar-B8RfKqK_.js";import"./AvatarStack-DMuCDYvd.js";import"./Badge-DjvMDfrb.js";import"./BigNumber-BUKpylgi.js";import"./Breadcrumb-sCKR4Igg.js";import"./Link-vKMcGo7K.js";import"./Heading-SC8_jTYN.js";import"./Legend-y0Ar6iWb.js";import"./FileCardList-Cn86yoca.js";import"./Image-xuezAXss.js";import"./Color-B-qsF8pt.js";import"./Content-BKplhx8p.js";import"./ContextualHelpTrigger-Dfubfga1.js";import"./CounterBadge-CFFm22KU.js";import"./DonutChart-DCgU6wRU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5xFdcQ5.js";import"./Header-Cl9fUDWk.js";import"./Initials-C7J0wROu.js";import"./InlineCode-CiNw8bdK.js";import"./PopoverTrigger-BPBAKMHr.js";import"./LoadingSpinner-BXFlmGo5.js";import"./Separator-BrRhA1HQ.js";import"./Message-BzU_4CRb.js";import"./MessageSeparator-B6AUCd9I.js";import"./NavigationGroup-CVIW0udI.js";import"./Notification-Du18cKPe.js";import"./NotificationProvider-BI6xuOIs.js";import"./ProgressBar-D-RT1H5h.js";import"./Rating-sNa6Va53.js";import"./Skeleton-ByOM2YeZ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
