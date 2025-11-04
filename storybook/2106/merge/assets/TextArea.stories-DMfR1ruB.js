import{j as r,r as x}from"./iframe-UywY67Bv.js";import{a as d,u as l,F as c,t as f}from"./Form-BecK6Ytt.js";import{L as o}from"./Label-BdSCfiWt.js";import{B as a}from"./Button-Gbk6h-JG.js";import{S as F}from"./Section-CaIrT3Oi.js";import{A as j}from"./ActionGroup-8065NRIs.js";import{s as u}from"./Action-CUqRfkG0.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{a as t,F as b}from"./Modal-B1XsSRlG.js";import"./index-nuYtCEEu.js";import"./dynamic-D6UsKhYE.js";import"./flowComponent-Dm-blvsZ.js";import"./index-BgsjFh65.js";import"./clsx-B-dksMZM.js";import"./index-BZZbJWsv.js";import"./useLocalizedStringFormatter-DQTCanVK.js";import"./context-DOa8wsuE.js";import"./browser-89HKgK6A.js";import"./utils-Q3LyW17A.js";import"./ProgressBar-BT1yEvUw.js";import"./Hidden-DHTrACZy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DwFhTB3p.js";import"./Text-ACfuEtxv.js";import"./EmulatedBoldText-IS2YzD6-.js";import"./LoadingSpinner-DB5NhDK9.js";import"./Button-Dm7HkgNO.js";import"./useFocusRing-CEJ8z4sH.js";import"./useFocusable-D_AejfVj.js";import"./Dialog-QZmtNN3w.js";import"./RSPContexts-DKA2ogYJ.js";import"./OverlayArrow-B1W-06M-.js";import"./useControlledState-YHruiK90.js";import"./Collection-JD_tC5W8.js";import"./CollectionBuilder-DCs1Xm6c.js";import"./SelectionIndicator-XKCl6mR6.js";import"./Separator-hCT8I1RM.js";import"./getActionGroupSlot-BYkRiiTw.js";import"./useStatic-CXquBJ6C.js";import"./context-BigokEM3.js";import"./Popover-D1J4MggM.js";import"./OverlayTrigger-CDX30Jbz.js";import"./ControlledNotification-D50j9sIR.js";import"./ClearPropsContextView-Dm11ykOR.js";import"./LayoutCard-C0EPvsU3.js";import"./Accordion-BK4GuAoC.js";import"./Alert-C0EsiSv_.js";import"./AlertIcon-BnqUCYzd.js";import"./AlertBadge-B7Gau8m7.js";import"./Align-BmJOMdIy.js";import"./TableFooterRow-Bv0-bpAh.js";import"./SkeletonText-DpHKYHJZ.js";import"./Avatar-M318ynuv.js";import"./AvatarStack-Flh6B9Tb.js";import"./Badge-DHwTV9Zs.js";import"./BigNumber-BZRncc6S.js";import"./Breadcrumb-BZSCf-6e.js";import"./Link-CLqTFJh1.js";import"./Heading-DokAbZVz.js";import"./Legend-u8qZQHCw.js";import"./FileCardList-B3N0e0dv.js";import"./Image-CM2sjxlA.js";import"./CodeBlock-BBJItXDs.js";import"./CopyButton-CPARqyj4.js";import"./Tooltip-DhQmcZ0r.js";import"./react-children-utilities-cyw5EAJU.js";import"./Color-BQTRcc4A.js";import"./Content-CDtjT_Xe.js";import"./ContextualHelpTrigger-Nj7CEmIW.js";import"./CounterBadge-BvFCF2iG.js";import"./DonutChart-DA4lEOuY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DYNPakqr.js";import"./Header-NJIzvUu8.js";import"./Initials-BicwQCWx.js";import"./InlineCode-IDIJw-r4.js";import"./LabeledValue-4mP07mAd.js";import"./PopoverTrigger-BnwqDM04.js";import"./Markdown-DLtx481N.js";import"./Separator-Bue3T6x6.js";import"./Message-CKkR5n6-.js";import"./MessageSeparator-DyuDr-P8.js";import"./NavigationGroup-CR-zeo24.js";import"./Notification-DuT0orJi.js";import"./NotificationProvider-CBFCjlXq.js";import"./ProgressBar-DwzJ5Krm.js";import"./Rating-DCUiyl_B.js";import"./Skeleton-DYUui1jC.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),te={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const i=async h=>{await u(1500),y(h)},e=l({defaultValues:{message:"",messageDefaultValue:g.medium,messageRequired:"",messageMaxLength:""}}),m=f();return r.jsx(c,{form:e,onSubmit:i,children:r.jsxs(F,{children:[r.jsx(m,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(j,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},n={render:i=>{const e=l();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:i=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
