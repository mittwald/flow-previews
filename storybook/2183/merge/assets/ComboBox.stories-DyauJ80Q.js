import{j as o,r as F}from"./iframe-BIOR2-hs.js";import{b as u,u as x,F as j,t as g}from"./Form-DmAReG0K.js";import{L as r}from"./Label-BLkwK3Kt.js";import{R as f,S as w}from"./ResetButton-DZ7gY5XE.js";import{B as t}from"./Button-CfZ-AQyp.js";import{S as B,s as O}from"./Section-BqNRxlPT.js";import{A as C}from"./ActionGroup-CY4j-L1M.js";import{y as i,O as n,g as E}from"./TimeField-DsDqWsQ-.js";import{C as p,a as l}from"./ContextualHelpTrigger-BXnzR8Ux.js";import{T as c}from"./Text-DusIDTsD.js";import{d as h}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BVxG6scv.js";import"./PropsContextProvider-RMvdN3RZ.js";import"./mergeRefs-U5WlywcK.js";import"./index-k9AOzptS.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BKbYN9ME.js";import"./context-BLOg-x3I.js";import"./browser-D0ITs1ti.js";import"./utils-DsOUUUiG.js";import"./ProgressBar-_rI0OtV6.js";import"./Hidden-CVR9fNcA.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DZ71cvXF.js";import"./remote-CjhnXpnY.js";import"./LoadingSpinner-CKTuHmBU.js";import"./Button-Vr3ctEdr.js";import"./useFocusRing-1hKsP8MW.js";import"./useFocusable-B_nx0oid.js";import"./context-CUEzUKrh.js";import"./RSPContexts-DcPCJIF5.js";import"./Collection-Cvuk07Q7.js";import"./CollectionBuilder-Dgt7X-YC.js";import"./SelectionIndicator-DG9tWISV.js";import"./Separator-DTwWIU6f.js";import"./useStatic-CRF1h1Jc.js";import"./Accordion-NoXfJmUE.js";import"./Alert-CoZzyuQ9.js";import"./AlertIcon-BvUo9Etu.js";import"./AlertBadge-DCY0z1jh.js";import"./Align-C8XIH-7n.js";import"./Popover-BGEckYFs.js";import"./OverlayTrigger-4gUv_Eql.js";import"./TableFooterRow-BUV2_OgU.js";import"./SkeletonText-DYOjw4oF.js";import"./Avatar-BUQx2CI1.js";import"./AvatarStack-Xz4hqYuD.js";import"./Badge-Cr-ClmAO.js";import"./BigNumber-L7ZWV3y6.js";import"./Breadcrumb-qAQdTaCx.js";import"./Link-DoJ4IPEN.js";import"./Heading-Cv__lUFC.js";import"./Legend-ZeqB-YKM.js";import"./FileCardList-C94A5o8Z.js";import"./Image-DwW9X8dg.js";import"./Color-CnqARC2o.js";import"./Content-BrpitEoE.js";import"./CounterBadge-BfId8Yot.js";import"./DonutChart-C8wwiAZA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-8GDMUcKQ.js";import"./Header-CRVpFWgA.js";import"./Initials-D4NqoMu-.js";import"./InlineCode-DaFFs495.js";import"./PopoverTrigger-BXV6g6Jr.js";import"./Separator-BAa6viOO.js";import"./Message-DKDXC3NB.js";import"./MessageSeparator-CGyHmQ4m.js";import"./NavigationGroup-D7bLGYP0.js";import"./Notification-D2xjz265.js";import"./NotificationProvider-XOHGZ29Q.js";import"./ProgressBar-B6DJTl7K.js";import"./Rating-UOf7auGu.js";import"./Skeleton-BNldNKri.js";import"./EmulatedBoldText-Wg5Zh9Cq.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,S=T("submit"),Zo={title:"Integrations/React Hook Form/ComboBox",component:u,render:()=>{const e=async y=>{await O(1500),S(y)},b=x({defaultValues:{domain:"",domainDefaultValue:"mydomain.de",domainRequired:""}}),d=g();return o.jsx(j,{form:b,onSubmit:e,children:o.jsxs(B,{children:[o.jsx(d,{name:"domain",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainDefaultValue",children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsx(d,{name:"domainRequired",rules:{required:"Please select a domain"},children:o.jsxs(i,{children:[o.jsx(r,{children:"Domain"}),o.jsx(n,{value:"mydomain.de",children:"mydomain.de"}),o.jsx(n,{value:"anotherdomain.com",children:"anotherdomain.com"})]})}),o.jsxs(C,{children:[o.jsx(f,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})]})})}},m={},a={render:()=>{const e=x({defaultValues:{field:""}});return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),o.jsxs(j,{form:e,onSubmit:async()=>await O(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsxs(i,{isInvalid:!0,children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"}),o.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=x({defaultValues:{field:""}});return o.jsxs(j,{form:e,onSubmit:async()=>await O(2e3),children:[o.jsx(u,{name:"field",children:o.jsxs(i,{children:[o.jsxs(r,{children:["Domain",o.jsxs(p,{children:[o.jsx(t,{}),o.jsx(l,{children:o.jsx(c,{children:h.short})})]})]}),o.jsx(n,{children:"mydomain.de"}),o.jsx(n,{children:"shop.mydomain.de"}),o.jsx(n,{children:"anotherdomain.com"}),o.jsx(n,{children:"www.anotherdomain.com"}),o.jsx(n,{children:"anotherdomain.com/shop"}),o.jsx(n,{children:"anotherdomain.com/blog"}),o.jsx(n,{children:"onemoredomain.de"}),o.jsx(n,{children:"www.onemoredomain.de"})]})}),o.jsx("div",{style:{marginBottom:"2200px"}}),o.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),o.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),o.jsx(f,{children:"Reset"}),o.jsx(w,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
          <ComboBox>
            <Label>
              Domain
              <ContextualHelpTrigger>
                <Button />
                <ContextualHelp>
                  <Text>{dummyText.short}</Text>
                </ContextualHelp>
              </ContextualHelpTrigger>
            </Label>
            <Option>mydomain.de</Option>
            <Option>shop.mydomain.de</Option>
            <Option>anotherdomain.com</Option>
            <Option>www.anotherdomain.com</Option>
            <Option>anotherdomain.com/shop</Option>
            <Option>anotherdomain.com/blog</Option>
            <Option>onemoredomain.de</Option>
            <Option>www.onemoredomain.de</Option>
          </ComboBox>
        </Field>
        <ComboBox isInvalid>
          <Label>
            Domain
            <ContextualHelpTrigger>
              <Button />
              <ContextualHelp>
                <Text>{dummyText.short}</Text>
              </ContextualHelp>
            </ContextualHelpTrigger>
          </Label>
          <Option>mydomain.de</Option>
          <Option>shop.mydomain.de</Option>
          <Option>anotherdomain.com</Option>
          <Option>www.anotherdomain.com</Option>
          <Option>anotherdomain.com/shop</Option>
          <Option>anotherdomain.com/blog</Option>
          <Option>onemoredomain.de</Option>
          <Option>www.onemoredomain.de</Option>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </ComboBox>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <ComboBox>
            <Label>
              Domain
              <ContextualHelpTrigger>
                <Button />
                <ContextualHelp>
                  <Text>{dummyText.short}</Text>
                </ContextualHelp>
              </ContextualHelpTrigger>
            </Label>
            <Option>mydomain.de</Option>
            <Option>shop.mydomain.de</Option>
            <Option>anotherdomain.com</Option>
            <Option>www.anotherdomain.com</Option>
            <Option>anotherdomain.com/shop</Option>
            <Option>anotherdomain.com/blog</Option>
            <Option>onemoredomain.de</Option>
            <Option>www.onemoredomain.de</Option>
          </ComboBox>
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const $o=["Default","WithFieldError","WithFocus"];export{m as Default,a as WithFieldError,s as WithFocus,$o as __namedExportsOrder,Zo as default};
