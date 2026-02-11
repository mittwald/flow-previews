import{r as E,j as e}from"./iframe-B___tkgA.js";import{A as j}from"./ActionGroup-BHdTvu9o.js";import{B as f}from"./Button-CK4qYUON.js";import{L as t}from"./Label-WD9nd_On.js";import{S as b}from"./Section-DE9sm5BA.js";import{T as n}from"./TextField-BEReKfZ9.js";import{a as p,u,F as c,R as h,S as x,t as S}from"./ResetButton-Crujzy8J.js";import{s as F}from"./Action-DRwD3AMr.js";import{F as B}from"./FieldError-DrmvSGqW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BEuCOou2.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./clsx-B-dksMZM.js";import"./index-2yYueaxI.js";import"./getActionGroupSlot-CLc7h3ns.js";import"./useStatic-DSdFfo4Y.js";import"./IconWarning-DnK3ATSm.js";import"./remote-CwYVL4Pl.js";import"./Text-C5KW7r-3.js";import"./browser-C6gsgKxf.js";import"./EmulatedBoldText-BcNjSABl.js";import"./Text-CbxRuAhG.js";import"./utils-BoKG2kRw.js";import"./LoadingSpinner-gELkMREc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./context-CHjly9N5.js";import"./Button-dgLzajPx.js";import"./ProgressBar-CdmwSyiz.js";import"./Label-BwlZgh8W.js";import"./Hidden-DKsxRYjN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CH6QmtjC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-XNzvlEPV.js";import"./useFocus-x-GTmi1B.js";import"./useFocusRing-BdE9QsVo.js";import"./useFocusable-DdN6L3mC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BssuI41M.js";import"./Dialog-SqXlQhu9.js";import"./RSPContexts-xv2R9swO.js";import"./OverlayArrow-De6KLSjI.js";import"./useControlledState-xG-Gpz3Z.js";import"./Collection-XdP36m4g.js";import"./CollectionBuilder-BV7ZWrgu.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./Separator-7ST9riI-.js";import"./SelectionManager-BkOmbFBM.js";import"./useEvent-FGSNypfV.js";import"./useCollator-C6qS_GFX.js";import"./FocusScope-6XhI78W1.js";import"./VisuallyHidden-feej_kfu.js";import"./useControlledHostValueProps-C4-i_rC0.js";import"./useFieldComponent-vfbWFIJK.js";import"./FieldDescription-C1ZwwWMX.js";import"./TextField-4VWUIDAX.js";import"./FieldError-Bxvpebgp.js";import"./Form-Bd7gFKVi.js";import"./Group-CLJgWjIj.js";import"./Input-CKNBze1L.js";import"./useTextField-BSXvhdIQ.js";import"./useFormReset-BMzMnmaN.js";import"./useFormValidation-DPy8gvTm.js";import"./useRef-CEF838Jv.js";import"./ButtonView-B7YCzKos.js";import"./context-iZF9qbeo.js";import"./AlertText-BYyQ41f3.js";import"./AlertIcon-COjYyYJX.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const o=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
