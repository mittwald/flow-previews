import{j as r,r as x}from"./iframe-kjkHkmuG.js";import{c as a,u as l,F as d,t as j}from"./Form-Cq355XTY.js";import{L as o}from"./Label-Ca0botOM.js";import{R as c,S as f}from"./ResetButton-tTPaRgiQ.js";import{B as p}from"./Button-B7VtDimI.js";import{S as g,s as u}from"./Section-Di6ereWQ.js";import{A as b}from"./ActionGroup-B72bwf7M.js";import{N as t,x as E,F as S}from"./Modal-0bgB5MJd.js";import"./index-nuYtCEEu.js";import"./dynamic-BmAGjafL.js";import"./flowComponent-CipIzjpW.js";import"./index-CkW5Yidx.js";import"./clsx-B-dksMZM.js";import"./index-Ce5Nlxxb.js";import"./useLocalizedStringFormatter-CWdDsDMk.js";import"./context-DKZTM6pY.js";import"./browser-i7jAx1Fh.js";import"./utils-uJ4-NNRC.js";import"./ProgressBar-SgmdiFAI.js";import"./Hidden-C9LFy0Lp.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CMakOX5C.js";import"./Text-D4QcDsPt.js";import"./EmulatedBoldText-CsxaKUEU.js";import"./LoadingSpinner-CCMWfn-z.js";import"./Button-CPb8XJRj.js";import"./useFocusRing-CunmVmWl.js";import"./useFocusable-DMxxipCc.js";import"./context-DelhS3-G.js";import"./RSPContexts-1NZhJNvl.js";import"./Collection-BGAg5cVl.js";import"./CollectionBuilder-C24jMLh-.js";import"./SelectionIndicator-2ey5txuw.js";import"./Separator-_AMhP75A.js";import"./useStatic-BQelcXwM.js";import"./FileCardList-ByOMDCHV.js";import"./Avatar-C1lRJ6tW.js";import"./AlertIcon-CX0jvCdY.js";import"./Image-DvlLXzm2.js";import"./Link-DZXgz7Xp.js";import"./ControlledNotification-BqK55IK0.js";import"./Flex-CV-Pkpn9.js";import"./Accordion-BfFjMQFD.js";import"./Alert-LMEN0RsN.js";import"./AlertBadge-2LtFU-Ml.js";import"./Align-BH2-KQDB.js";import"./AvatarStack-TOOiI3ZS.js";import"./BigNumber-DN_nWYcY.js";import"./Breadcrumb-BoOjDcq4.js";import"./Heading-C6qiLJW3.js";import"./Legend-YpQaLltb.js";import"./Color-D_EMm2-c.js";import"./TableFooterRow-Dy9Hm7Fq.js";import"./SkeletonText-C_hFxFJ1.js";import"./Content-DOMtlypw.js";import"./CounterBadge-DpRVMejc.js";import"./DonutChart-OsMTrpsW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bso8HKFb.js";import"./Header-BMOLLcii.js";import"./Initials-IMjMZZM4.js";import"./InlineCode-DGV_Qs_a.js";import"./LayoutCard-BdOAhJjJ.js";import"./Separator-DpLhRQNb.js";import"./MessageSeparator-JWDNOqbY.js";import"./NavigationGroup-CNQzbtXt.js";import"./Notification-DusdwtWV.js";import"./NotificationProvider-D3VY9NtU.js";import"./ProgressBar-Dx3EHT7v.js";import"./Rating-hlP75Uf2.js";import"./Skeleton-C4RIhoE3.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,kr as default};
