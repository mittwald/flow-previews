import{j as e,r as E}from"./iframe-DBKYLzDC.js";import{A as j}from"./ActionGroup-C49teGDs.js";import{B as f}from"./Button-BFOZVdd1.js";import{L as t}from"./Label-Dsk_CpOI.js";import{S as b}from"./Section-D0mpF1xZ.js";import{T as n}from"./TextField-GHg_46Pg.js";import{a as p,u,F as c,t as S,R as h,S as x}from"./ResetButton-ssRCuNTw.js";import{s as F}from"./Action-CPy4r2qq.js";import{F as B}from"./FieldError-BpFJPqyd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C4GhTGlQ.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./clsx-B-dksMZM.js";import"./index-Dr37f313.js";import"./getActionGroupSlot-BnE40Egr.js";import"./useStatic-DlOT-tNl.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./Text-gSr4j5A3.js";import"./browser-DhKn1UU2.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Text-D7rD6BG6.js";import"./utils-BUG9eo0Q.js";import"./LoadingSpinner-CHsn4uBv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./Button-Cx-eUYHB.js";import"./ProgressBar-PjCJ3Rn2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BGvoAl80.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZ5qqTtf.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useFocusable-C-cRLAom.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DLB9FUAU.js";import"./Dialog-DCNro2wm.js";import"./RSPContexts-Dx0AtfwO.js";import"./OverlayArrow-DgtaOzAt.js";import"./useControlledState-CAANpQPW.js";import"./Collection-CxTKYF8C.js";import"./CollectionBuilder-6XtVclM0.js";import"./SelectionIndicator-DEY3TFv1.js";import"./Separator-CmMmdds6.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./VisuallyHidden-BW797Lc5.js";import"./TextFieldBase-CTAeNQ66.js";import"./FieldDescription-CjIQL23v.js";import"./useFieldComponent-DRt8IUS_.js";import"./TextField-D3roR9vT.js";import"./FieldError-DtV1i0Hc.js";import"./Form-CPSCXeOA.js";import"./Group-eKP5WoY_.js";import"./Input-DeboNFfQ.js";import"./useTextField-EejmEUEW.js";import"./useFormReset-BczjDhHV.js";import"./useFormValidation-DNSyvwAg.js";import"./useControlledHostValueProps-v0KkbD9s.js";import"./useRef-CtdmBt-J.js";import"./ButtonView-CEeOUgiW.js";import"./context-Duo0MdiJ.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
