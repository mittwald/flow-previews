import{j as e,r as E}from"./iframe-DBiC_ZnR.js";import{A as j}from"./ActionGroup-D-mz5Ka-.js";import{B as f}from"./Button-Dz2v4SBO.js";import{L as t}from"./Label-xzCvdkIk.js";import{S as b,s as p}from"./Section-PPvrLtVe.js";import{T as n,F as B}from"./Modal-CFT07oZI.js";import{c as h,u,F as c,t as S}from"./Form-C3u-uCnC.js";import{R as x,S as F}from"./ResetButton-Cmae_FUB.js";import"./index-nuYtCEEu.js";import"./dynamic-CtV33ye2.js";import"./flowComponent-D0XIYrNX.js";import"./index-Bp9tFnUt.js";import"./clsx-B-dksMZM.js";import"./index-CVV0Ew5-.js";import"./getActionGroupSlot-CAWRcoDx.js";import"./useStatic-DEZxNC-q.js";import"./IconWarning-CK2ZGKNK.js";import"./Text-BcLTITKQ.js";import"./browser-DU6w9x_W.js";import"./utils-DtstTdJR.js";import"./EmulatedBoldText-ClmR1Uhh.js";import"./LoadingSpinner-TzV_vALb.js";import"./Button-L3lWig61.js";import"./ProgressBar-DmZeIXpS.js";import"./Hidden-Dw7083pg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7Lcog2P0.js";import"./useFocusRing-DtYok8JN.js";import"./useFocusable-CIN_gk5Z.js";import"./useLocalizedStringFormatter-D7iDpTHP.js";import"./context-BMyT49yV.js";import"./RSPContexts-BN9qRqww.js";import"./Collection-CSHv5Add.js";import"./CollectionBuilder-Bq-WlyGC.js";import"./SelectionIndicator-CqAhSFEy.js";import"./Separator-CJkt4YbH.js";import"./FileCardList-BQ0PrUKt.js";import"./Avatar-BwVc0hzE.js";import"./AlertIcon-_-sw5S_n.js";import"./Image-D5b2Er5_.js";import"./Link-D0ngLqvb.js";import"./ControlledNotification-BYDi47LJ.js";import"./LayoutCard-DujkBG9b.js";import"./Accordion-BPGdA9fR.js";import"./Alert-D-T0L3mL.js";import"./AlertBadge-hinnerB-.js";import"./Align-bv03_ePf.js";import"./AvatarStack-BuYJ-fes.js";import"./BigNumber-CBIvAU_0.js";import"./Breadcrumb-B-xNS-GU.js";import"./Heading-DAHW42f0.js";import"./Legend-ByhIQaF3.js";import"./Color-CORewqWi.js";import"./TableFooterRow-BbDFkWI7.js";import"./SkeletonText-CiTXgN5i.js";import"./Content-CsyIBpFy.js";import"./CounterBadge-DytJIUgP.js";import"./DonutChart-D3VLTo_J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C4HRucEG.js";import"./Header-DKDAJOov.js";import"./Initials-BFBRnihA.js";import"./InlineCode-Bt3wPgje.js";import"./Separator-BeLwNHQN.js";import"./MessageSeparator-_4Z2k_CE.js";import"./NavigationGroup-CjgLGw0v.js";import"./Notification-GKnJp8ZA.js";import"./NotificationProvider-DzFmVfpi.js";import"./ProgressBar-2UwBkw3O.js";import"./Rating-DLMdLSIQ.js";import"./Skeleton-BBSK6hjL.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
