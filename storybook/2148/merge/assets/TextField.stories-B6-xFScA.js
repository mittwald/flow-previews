import{j as e,r as E}from"./iframe-kjkHkmuG.js";import{A as j}from"./ActionGroup-B72bwf7M.js";import{B as f}from"./Button-B7VtDimI.js";import{L as t}from"./Label-Ca0botOM.js";import{S as b,s as p}from"./Section-Di6ereWQ.js";import{T as n,F as B}from"./Modal-0bgB5MJd.js";import{c as h,u,F as c,t as S}from"./Form-Cq355XTY.js";import{R as x,S as F}from"./ResetButton-tTPaRgiQ.js";import"./index-nuYtCEEu.js";import"./dynamic-BmAGjafL.js";import"./flowComponent-CipIzjpW.js";import"./index-CkW5Yidx.js";import"./clsx-B-dksMZM.js";import"./index-Ce5Nlxxb.js";import"./IconWarning-CMakOX5C.js";import"./Text-D4QcDsPt.js";import"./browser-i7jAx1Fh.js";import"./utils-uJ4-NNRC.js";import"./EmulatedBoldText-CsxaKUEU.js";import"./LoadingSpinner-CCMWfn-z.js";import"./Button-CPb8XJRj.js";import"./ProgressBar-SgmdiFAI.js";import"./Hidden-C9LFy0Lp.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DKZTM6pY.js";import"./useFocusRing-CunmVmWl.js";import"./useFocusable-DMxxipCc.js";import"./useLocalizedStringFormatter-CWdDsDMk.js";import"./context-DelhS3-G.js";import"./RSPContexts-1NZhJNvl.js";import"./Collection-BGAg5cVl.js";import"./CollectionBuilder-C24jMLh-.js";import"./SelectionIndicator-2ey5txuw.js";import"./Separator-_AMhP75A.js";import"./useStatic-BQelcXwM.js";import"./FileCardList-ByOMDCHV.js";import"./Avatar-C1lRJ6tW.js";import"./AlertIcon-CX0jvCdY.js";import"./Image-DvlLXzm2.js";import"./Link-DZXgz7Xp.js";import"./ControlledNotification-BqK55IK0.js";import"./Flex-CV-Pkpn9.js";import"./Accordion-BfFjMQFD.js";import"./Alert-LMEN0RsN.js";import"./AlertBadge-2LtFU-Ml.js";import"./Align-BH2-KQDB.js";import"./AvatarStack-TOOiI3ZS.js";import"./BigNumber-DN_nWYcY.js";import"./Breadcrumb-BoOjDcq4.js";import"./Heading-C6qiLJW3.js";import"./Legend-YpQaLltb.js";import"./Color-D_EMm2-c.js";import"./TableFooterRow-Dy9Hm7Fq.js";import"./SkeletonText-C_hFxFJ1.js";import"./Content-DOMtlypw.js";import"./CounterBadge-DpRVMejc.js";import"./DonutChart-OsMTrpsW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bso8HKFb.js";import"./Header-BMOLLcii.js";import"./Initials-IMjMZZM4.js";import"./InlineCode-DGV_Qs_a.js";import"./LayoutCard-BdOAhJjJ.js";import"./Separator-DpLhRQNb.js";import"./MessageSeparator-JWDNOqbY.js";import"./NavigationGroup-CNQzbtXt.js";import"./Notification-DusdwtWV.js";import"./NotificationProvider-D3VY9NtU.js";import"./ProgressBar-Dx3EHT7v.js";import"./Rating-hlP75Uf2.js";import"./Skeleton-C4RIhoE3.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const Ge=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ge as __namedExportsOrder,Ue as default};
