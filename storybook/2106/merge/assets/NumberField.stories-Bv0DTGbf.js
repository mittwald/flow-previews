import{j as r,r as h}from"./iframe-UywY67Bv.js";import{a as p,u as l,F as d,t as F}from"./Form-BecK6Ytt.js";import{L as o}from"./Label-BdSCfiWt.js";import{B as i}from"./Button-Gbk6h-JG.js";import{S as x}from"./Section-CaIrT3Oi.js";import{A as j}from"./ActionGroup-8065NRIs.js";import{s as u}from"./Action-CUqRfkG0.js";import{N as t,p as g,F as b}from"./Modal-B1XsSRlG.js";import"./index-nuYtCEEu.js";import"./dynamic-D6UsKhYE.js";import"./flowComponent-Dm-blvsZ.js";import"./index-BgsjFh65.js";import"./clsx-B-dksMZM.js";import"./index-BZZbJWsv.js";import"./useLocalizedStringFormatter-DQTCanVK.js";import"./context-DOa8wsuE.js";import"./browser-89HKgK6A.js";import"./utils-Q3LyW17A.js";import"./ProgressBar-BT1yEvUw.js";import"./Hidden-DHTrACZy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DwFhTB3p.js";import"./Text-ACfuEtxv.js";import"./EmulatedBoldText-IS2YzD6-.js";import"./LoadingSpinner-DB5NhDK9.js";import"./Button-Dm7HkgNO.js";import"./useFocusRing-CEJ8z4sH.js";import"./useFocusable-D_AejfVj.js";import"./Dialog-QZmtNN3w.js";import"./RSPContexts-DKA2ogYJ.js";import"./OverlayArrow-B1W-06M-.js";import"./useControlledState-YHruiK90.js";import"./Collection-JD_tC5W8.js";import"./CollectionBuilder-DCs1Xm6c.js";import"./SelectionIndicator-XKCl6mR6.js";import"./Separator-hCT8I1RM.js";import"./getActionGroupSlot-BYkRiiTw.js";import"./useStatic-CXquBJ6C.js";import"./context-BigokEM3.js";import"./Popover-D1J4MggM.js";import"./OverlayTrigger-CDX30Jbz.js";import"./ControlledNotification-D50j9sIR.js";import"./ClearPropsContextView-Dm11ykOR.js";import"./LayoutCard-C0EPvsU3.js";import"./Accordion-BK4GuAoC.js";import"./Alert-C0EsiSv_.js";import"./AlertIcon-BnqUCYzd.js";import"./AlertBadge-B7Gau8m7.js";import"./Align-BmJOMdIy.js";import"./TableFooterRow-Bv0-bpAh.js";import"./SkeletonText-DpHKYHJZ.js";import"./Avatar-M318ynuv.js";import"./AvatarStack-Flh6B9Tb.js";import"./Badge-DHwTV9Zs.js";import"./BigNumber-BZRncc6S.js";import"./Breadcrumb-BZSCf-6e.js";import"./Link-CLqTFJh1.js";import"./Heading-DokAbZVz.js";import"./Legend-u8qZQHCw.js";import"./FileCardList-B3N0e0dv.js";import"./Image-CM2sjxlA.js";import"./CodeBlock-BBJItXDs.js";import"./CopyButton-CPARqyj4.js";import"./Tooltip-DhQmcZ0r.js";import"./react-children-utilities-cyw5EAJU.js";import"./Color-BQTRcc4A.js";import"./Content-CDtjT_Xe.js";import"./ContextualHelpTrigger-Nj7CEmIW.js";import"./CounterBadge-BvFCF2iG.js";import"./DonutChart-DA4lEOuY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DYNPakqr.js";import"./Header-NJIzvUu8.js";import"./Initials-BicwQCWx.js";import"./InlineCode-IDIJw-r4.js";import"./LabeledValue-4mP07mAd.js";import"./PopoverTrigger-BnwqDM04.js";import"./Markdown-DLtx481N.js";import"./Separator-Bue3T6x6.js";import"./Message-CKkR5n6-.js";import"./MessageSeparator-DyuDr-P8.js";import"./NavigationGroup-CR-zeo24.js";import"./Notification-DuT0orJi.js";import"./NotificationProvider-CBFCjlXq.js";import"./ProgressBar-DwzJ5Krm.js";import"./Rating-DCUiyl_B.js";import"./Skeleton-DYUui1jC.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),oe={title:"Integrations/React Hook Form/NumberField",component:p,render:()=>{const e=async f=>{await u(1500),y(f)},c=l({defaultValues:{ageDefaultValue:36}}),m=F();return r.jsx(d,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(m,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...a.parameters?.docs?.source}}};const te=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,a as WithFocus,te as __namedExportsOrder,oe as default};
