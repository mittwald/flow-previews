import{r as E,j as e}from"./iframe-BwxXT37i.js";import{A as j}from"./ActionGroup-BeR34umf.js";import{B as f}from"./Button-BPaKVUIt.js";import{L as t}from"./Label-CT8SIJ3i.js";import{S as b}from"./Section-DkCPmDIf.js";import{T as o}from"./TextField-D4JrIHkq.js";import{a as c,u,F as p,R as h,S as x,t as S}from"./ResetButton-BT6tMKqG.js";import{s as F}from"./ActionBatch-BYAp_qkn.js";import{F as B}from"./FieldError-D9vbHNcD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-dswMj1gt.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./clsx-B-dksMZM.js";import"./index-DuE4n7_M.js";import"./getActionGroupSlot-BlMz2vZa.js";import"./useStatic-DbyoNtmr.js";import"./IconWarning-Dl-kSkvo.js";import"./remote-DESTNxfj.js";import"./Text-COIxE5M6.js";import"./browser-DWx5NGhf.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./Text-CMM9EMAj.js";import"./utils-CJgL2cA6.js";import"./LoadingSpinner-C1b88oeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./context-CQJLc664.js";import"./Button-Cy0UoRmV.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClAEan5N.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bm2JbU_T.js";import"./useFocus-Czv-Zofa.js";import"./useFocusRing-m35H4vh1.js";import"./useFocusable-FNm71Fx1.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DLmcvkG_.js";import"./Dialog-B0vuTUBy.js";import"./RSPContexts-CqVOzJuC.js";import"./OverlayArrow-D6upTp02.js";import"./useControlledState-NXAAE7WV.js";import"./Collection-CBsMtROt.js";import"./CollectionBuilder-C9gwXR-G.js";import"./SelectionIndicator-D823LuT6.js";import"./Separator-D3qEwsya.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./VisuallyHidden-BP4pgppw.js";import"./useControlledHostValueProps-C4XwIoTW.js";import"./useFieldComponent-CUBWvnpR.js";import"./FieldDescription-BR2v-b2T.js";import"./TextField-DjZwGP6i.js";import"./FieldError-BR2H8wuy.js";import"./Form-BRwB9VIC.js";import"./Group-Dxy68sjF.js";import"./Input-C_uCddka.js";import"./useTextField-COT4ct8W.js";import"./useFormReset-BZECQBSr.js";import"./useFormValidation-CcuhNi7t.js";import"./Overlay-AD1OWyvg.js";import"./useOverlayController-Clvgh-dL.js";import"./OverlayContextProvider-BTOkgjHO.js";import"./ActionGroupView-lK7iQLI6.js";import"./Content-DSJl7gyc.js";import"./Heading-3o8VfDUm.js";import"./Heading-DQrX8nPA.js";import"./Modal-Ba2srwlL.js";import"./ButtonView-BxZPu1tu.js";import"./Flex-DzEskxqa.js";import"./useRef-CHinTfwY.js";import"./AlertText-CHWpHdzt.js";import"./AlertIcon-DLpjaGh3.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),ze={title:"Integrations/React Hook Form/TextField",component:c,render:()=>{const n=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:n,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
