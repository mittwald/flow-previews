import{j as e,r as E}from"./iframe-DjQX0xu7.js";import{A as j}from"./ActionGroup-BSKw1FYv.js";import{B as f}from"./Button-BzgEBlcG.js";import{L as t}from"./Label-DwpG6CHQ.js";import{S as b,s as p}from"./Section-Cz82PiQz.js";import{T as n,F as B}from"./Modal-BBNlMVze.js";import{c as h,u,F as c,t as S}from"./Form-CyljT57u.js";import{R as x,S as F}from"./ResetButton-DgCPLW6j.js";import"./index-nuYtCEEu.js";import"./dynamic-22J8cjb3.js";import"./flowComponent-JYU8T0At.js";import"./index-Cs3FvKNT.js";import"./clsx-B-dksMZM.js";import"./index-C69E--h5.js";import"./IconWarning-BuswXrVR.js";import"./Text-CBF9Mq5x.js";import"./browser-BHlZuLqI.js";import"./utils-C30iJzW5.js";import"./EmulatedBoldText-C8hbjTYh.js";import"./LoadingSpinner-CySWmfRx.js";import"./Button-BjLxB9ET.js";import"./ProgressBar-CCJkQYvg.js";import"./Hidden-DiDVenMv.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-D5QUCTp7.js";import"./useFocusRing-UFpAQC1c.js";import"./useFocusable-DfpRXFuB.js";import"./useLocalizedStringFormatter-DeqRUlGI.js";import"./context-B6Z8BqUC.js";import"./RSPContexts-DSRMecLI.js";import"./Collection-9mWjKSNJ.js";import"./CollectionBuilder-DGVbcN1s.js";import"./SelectionIndicator-BCys4Qq1.js";import"./Separator-B8K4J-Om.js";import"./useStatic-QbJcOryG.js";import"./FileCardList-DoyIp-u1.js";import"./Avatar-CD-JtxxQ.js";import"./AlertIcon-BUEZz4zv.js";import"./Image-BrUNo-p1.js";import"./Link-CkG0aVzf.js";import"./ControlledNotification-BMFbIoKB.js";import"./Flex-Rh0qQGjv.js";import"./Accordion-cPVhBb9_.js";import"./Alert-DEAo5TA3.js";import"./AlertBadge-CjbbHl0v.js";import"./Align-BIiffU6n.js";import"./AvatarStack-CWGa8hd6.js";import"./BigNumber-D2hG44RZ.js";import"./Breadcrumb-Cv5Q03Ns.js";import"./Heading-Ek-NbzZ5.js";import"./Legend-IlVWPDZR.js";import"./Color-Cv9cJ5fh.js";import"./TableFooterRow-CtfTvciP.js";import"./SkeletonText-CuL7hCDf.js";import"./Content-C8r-jMKP.js";import"./CounterBadge-Cln_B5dZ.js";import"./DonutChart-CeYVkmS5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CDOd4Rmd.js";import"./Header-D6EurdOg.js";import"./Initials-CZh9PsXN.js";import"./InlineCode-D-2oy3Ir.js";import"./LayoutCard-F3d117j-.js";import"./Separator-DfIOpBez.js";import"./MessageSeparator-BtlLyxAF.js";import"./NavigationGroup-BlAMWir7.js";import"./Notification-3EcIdYeY.js";import"./NotificationProvider-jYqbFyZ7.js";import"./ProgressBar-O_f2my1S.js";import"./Rating-5sVy98qX.js";import"./Skeleton-jyWQALH6.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
