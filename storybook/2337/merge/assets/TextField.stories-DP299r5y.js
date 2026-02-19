import{r as E,j as e}from"./iframe-DepdzLEL.js";import{A as j}from"./ActionGroup-C6xkxQp3.js";import{B as f}from"./Button-CNIywMH8.js";import{L as t}from"./Label-CprHQXm7.js";import{S as b}from"./Section-Bhu7zDVU.js";import{T as o}from"./TextField-F_DQanTl.js";import{a as c,u,F as p,R as h,S as x,t as S}from"./ResetButton--NiDVYNh.js";import{s as F}from"./ActionBatch-CxGdjV-j.js";import{F as B}from"./FieldError-BU6iaS9f.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DyShJQHT.js";import"./flowComponent-fKj6y8ty.js";import"./index-BsHBlgok.js";import"./clsx-B-dksMZM.js";import"./index-QBVvmMGX.js";import"./getActionGroupSlot-DngwkT4-.js";import"./useStatic-D2N_z3eO.js";import"./IconWarning-DzJyip11.js";import"./remote-BQ4RO_kW.js";import"./Text-DQklyFH_.js";import"./browser-DxvLCkxH.js";import"./EmulatedBoldText-MhUupop4.js";import"./Text-CHX4WGB5.js";import"./utils-7tdA0jB4.js";import"./LoadingSpinner-CFbq72U2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./context-BDIAQ50e.js";import"./Button-BTig9cwD.js";import"./ProgressBar-Db1s_185.js";import"./Label-DGPqobXV.js";import"./Hidden-Czdw4FHX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B2Boz_gi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqHqHS4f.js";import"./useFocus-ZpAuijkN.js";import"./useFocusRing-DGi1wLvD.js";import"./useFocusable-Cun53ew4.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DuMO6oHS.js";import"./Dialog-pPKxFXOM.js";import"./RSPContexts-C4BguXQB.js";import"./OverlayArrow-D9XOfekb.js";import"./useControlledState-BNsQxzmb.js";import"./Collection-CQf_iL2m.js";import"./CollectionBuilder-BRFKsZkG.js";import"./SelectionIndicator-D1BAj3_c.js";import"./Separator-Cs836uSa.js";import"./SelectionManager-Y4qgtYQ4.js";import"./useEvent-DIoFJeOI.js";import"./useCollator-MpcrCLx0.js";import"./FocusScope-C6Ou1N9_.js";import"./VisuallyHidden-msEuPEko.js";import"./useControlledHostValueProps-3YWZEOQ_.js";import"./useFieldComponent-PSzBC9V7.js";import"./FieldDescription-DtFiJJAO.js";import"./TextField-B2V589l8.js";import"./FieldError-BblJXfzn.js";import"./Form-C_wI2Oz7.js";import"./Group-Q1-Bo2i3.js";import"./Input-Dj03zPrR.js";import"./useTextField-DNUcA_YH.js";import"./useFormReset-BQp6BNc9.js";import"./useFormValidation-C9ltsd1k.js";import"./ActionGroupView-D0VedWpi.js";import"./Content-BP0iCj4e.js";import"./Heading-BfiUETdQ.js";import"./Heading-Dfg4FmbO.js";import"./Modal-BbNl1Qkg.js";import"./useOverlayController-Br9LJhfN.js";import"./Overlay-CViqvEV6.js";import"./OverlayContextProvider-FdKPEOKm.js";import"./ButtonView-DkAiozhy.js";import"./Flex-DV0RJgp7.js";import"./useRef-DibF1Y9V.js";import"./AlertText-DwAinVf5.js";import"./AlertIcon-CRbLFRY9.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),ze={title:"Integrations/React Hook Form/TextField",component:c,render:()=>{const n=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:n,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
