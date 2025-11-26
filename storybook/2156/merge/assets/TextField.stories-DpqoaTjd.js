import{j as e,r as E}from"./iframe-g-XFBo2M.js";import{A as j}from"./ActionGroup-1WZPcRd7.js";import{B as f}from"./Button-CgOKxPbj.js";import{L as t}from"./Label-C0aRk6NU.js";import{S as b,s as p}from"./Section-BXzmDK8J.js";import{T as n,F as B}from"./Modal-HN7mUc_p.js";import{b as h,u,F as c,t as S}from"./Form-C-rqEFEY.js";import{R as x,S as F}from"./ResetButton-cLqq5vgS.js";import"./index-nuYtCEEu.js";import"./dynamic-y0BvrcCC.js";import"./flowComponent-BTFCKpJC.js";import"./index-Di8R43pA.js";import"./clsx-B-dksMZM.js";import"./index-D0vwgSdS.js";import"./IconWarning-IhhFy3Bx.js";import"./Text-vL1LV049.js";import"./browser-aGtpEYpD.js";import"./utils-BLpr0TUC.js";import"./EmulatedBoldText-weZy4b5C.js";import"./LoadingSpinner-hwBIUj3t.js";import"./Button-F2DpSCEE.js";import"./ProgressBar-DLmwbc5V.js";import"./Hidden-CbPhQWFj.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BmipQpJh.js";import"./useFocusRing-0SVajdfI.js";import"./useFocusable-BhABskQh.js";import"./useLocalizedStringFormatter-Cyj6BGOX.js";import"./context-MFH_cEi3.js";import"./RSPContexts-FyZiT-dA.js";import"./Collection-wAduGIRO.js";import"./CollectionBuilder-DM14duJF.js";import"./SelectionIndicator-CoVhmIZH.js";import"./Separator-tfjl_R7-.js";import"./useStatic-BQUJQZNk.js";import"./FileCardList-DoQkIDuX.js";import"./Avatar-X3dATXB7.js";import"./AlertIcon-DJoeY47w.js";import"./Image-MSIXUbcy.js";import"./Link-CRZIDf5q.js";import"./ControlledNotification-COssbRo0.js";import"./Flex-Bsm0K3ZO.js";import"./Accordion-DgcwWYzu.js";import"./Alert-BdQYV_b8.js";import"./AlertBadge-K2HkqN1E.js";import"./Align-CusiQaMs.js";import"./AvatarStack-DseM1MNa.js";import"./BigNumber-CTRFWhZ2.js";import"./Breadcrumb-DygeFtpj.js";import"./Heading-D8TOp1jB.js";import"./Legend-OCWjJfVR.js";import"./Color-BlRFVK3w.js";import"./TableFooterRow-lK-uAiGD.js";import"./SkeletonText-CtpLmtNt.js";import"./Content-BwCOhlmF.js";import"./CounterBadge-C0r21egP.js";import"./DonutChart-BDWUAJsd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-XlPrj5S3.js";import"./Header-C5E3rf3q.js";import"./Initials-B759V3Ss.js";import"./InlineCode-bJV2810L.js";import"./LayoutCard-DBrjjt1J.js";import"./Separator-KtU-Fy3c.js";import"./MessageSeparator-Dw1kKEgh.js";import"./NavigationGroup-Dgf5bfuu.js";import"./Notification-yM0bJJk7.js";import"./NotificationProvider-4So095Rx.js";import"./ProgressBar-Bj_6Z6Bp.js";import"./Rating-ci1cuaCo.js";import"./Skeleton-MXCSZONm.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
