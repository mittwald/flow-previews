import{j as e,r as E}from"./iframe-CGL3Ztd8.js";import{A as j}from"./ActionGroup-CrScu9QD.js";import{B as f}from"./Button-CdFi_Gvp.js";import{L as t}from"./Label-BdVzzMHl.js";import{S as b}from"./Section-DahycNJE.js";import{T as n}from"./TextField-CHusI8Ng.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-Df-4v6uT.js";import{s as F}from"./Action-D7FDWjoF.js";import{F as B}from"./FieldError-Bg6s6kv2.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8bvHICk.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./clsx-B-dksMZM.js";import"./index-eHspQkB2.js";import"./getActionGroupSlot-D2X8q845.js";import"./useStatic-aF_CYkuk.js";import"./IconWarning-CMBZCdTm.js";import"./remote-DEzwzibY.js";import"./Text-_sa0OuU0.js";import"./browser-Dk-cIrUN.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./Text-BKxs7Hdx.js";import"./utils-BPLHaINM.js";import"./LoadingSpinner-ChXboWO2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./context-BN4qQIb1.js";import"./Button-CySqxiup.js";import"./ProgressBar-C4R_ruZv.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dh-HsBYa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpWTOkQr.js";import"./useFocus-XDda6gbt.js";import"./useFocusRing-BtxSiiWP.js";import"./useFocusable-MZ2jhLFm.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DZtKonlo.js";import"./Dialog-D5rIpj4K.js";import"./RSPContexts-Dbu6eLkb.js";import"./OverlayArrow-BX1C_Ifh.js";import"./useControlledState-DjoZo3jd.js";import"./Collection-De-gN1c8.js";import"./CollectionBuilder-DX9xRdaS.js";import"./SelectionIndicator-CKCmLDiO.js";import"./Separator-CQ2yo0aI.js";import"./SelectionManager-BkQuw4FT.js";import"./useEvent-C3Ld1mH0.js";import"./useCollator-COOm3BGU.js";import"./FocusScope-CzHXyZUV.js";import"./VisuallyHidden-DvGmoJqV.js";import"./useControlledHostValueProps-DHO1n_5T.js";import"./useFieldComponent-CHIggLRE.js";import"./FieldDescription-DTkn5Gpa.js";import"./TextField-Cye5nWIo.js";import"./FieldError-CZz7QnF8.js";import"./Form-Ba7VKjcY.js";import"./Group-DH03d5g8.js";import"./Input-CtqQGuCR.js";import"./useTextField-CwFUpzxX.js";import"./useFormReset-C_UBUwcF.js";import"./useFormValidation-DhAeSygX.js";import"./useRef-BOtt9UAz.js";import"./ButtonView-DVA4InJ8.js";import"./context-B-HkcFzY.js";import"./AlertText-AGSpHO8N.js";import"./AlertIcon-DM1knw9_.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ue=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ue as __namedExportsOrder,Ie as default};
