import{r as E,j as e}from"./iframe-gtGtPSGX.js";import{A as j}from"./ActionGroup-CLeHwFAs.js";import{B as f}from"./Button-CvhKZeTQ.js";import{L as t}from"./Label-ezDYxAqR.js";import{S as b}from"./Section-BQknUcw4.js";import{T as o}from"./TextField-Bb9Zb86M.js";import{a as c,u,F as p,R as h,S as x,t as S}from"./ResetButton-B2s8Dmn4.js";import{s as F}from"./ActionBatch-C6WY1Daf.js";import{F as B}from"./FieldError-co03Ctd_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLlIyxqz.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./clsx-B-dksMZM.js";import"./index-CkPgzcm3.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./useStatic-CcUMZ2Ma.js";import"./IconWarning-BtUUciVj.js";import"./remote-DGcAtBID.js";import"./Text-QzTdDFQg.js";import"./browser-BLXRbgM1.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Text-B8kBB-Il.js";import"./utils-1b_KoCGs.js";import"./LoadingSpinner-DnqSg6_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./context-B_6Y7rB4.js";import"./Button-Bw2A7mA1.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BqGs6HWh.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ub7fcIm5.js";import"./useFocus-BGYZap87.js";import"./useFocusRing-jJpNIKKF.js";import"./useFocusable-uEYYPBvA.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CDCzjc8m.js";import"./Dialog-_BBlF040.js";import"./RSPContexts-L8MWaJ6n.js";import"./OverlayArrow-D9TvGvP1.js";import"./useControlledState-a_M_Sxv2.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./Separator-WOt-iCvu.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./FocusScope-d04sRaMv.js";import"./VisuallyHidden-D8bGSG_p.js";import"./useControlledHostValueProps-CP2C8WYU.js";import"./useFieldComponent-BaX-M8wV.js";import"./FieldDescription-ClA4Wtvf.js";import"./TextField-BDt0lpmD.js";import"./FieldError-DenhE7nb.js";import"./Form-BRxvySUZ.js";import"./Group-Dg14tYxa.js";import"./Input-1coMMItc.js";import"./useTextField-DQThDcRz.js";import"./useFormReset-TvJ_gIa-.js";import"./useFormValidation-BQy4AKy0.js";import"./ActionGroupView-D0kXKbJs.js";import"./Content-BghcAC3J.js";import"./Heading-DqsWSEZ3.js";import"./Heading-BlK6Cy5i.js";import"./Modal-d042eYeA.js";import"./useOverlayController-ljUuhRV3.js";import"./Overlay-CLrFplCq.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./ButtonView-VtGuDE6z.js";import"./Flex-D8ogRMIF.js";import"./useRef-IjWKQgTn.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),ze={title:"Integrations/React Hook Form/TextField",component:c,render:()=>{const n=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:n,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Qe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Qe as __namedExportsOrder,ze as default};
