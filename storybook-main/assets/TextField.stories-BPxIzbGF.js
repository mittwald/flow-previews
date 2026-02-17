import{r as E,j as e}from"./iframe-jaoHr1AV.js";import{A as j}from"./ActionGroup-BMyaLsc1.js";import{B as f}from"./Button-DsyAZnvz.js";import{L as t}from"./Label-Kdaxftsp.js";import{S as b}from"./Section-D5fyzIcp.js";import{T as o}from"./TextField-C7d-UtB8.js";import{a as c,u,F as p,R as h,S as x,t as S}from"./ResetButton-DAPnXDhG.js";import{s as F}from"./ActionBatch-Dl5Fmp7w.js";import{F as B}from"./FieldError-SYu40l7i.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BZQIArQs.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./clsx-B-dksMZM.js";import"./index-BFCtAlHX.js";import"./getActionGroupSlot-BJH_a8Yi.js";import"./useStatic-CMyMNZPZ.js";import"./IconWarning-DyIA4Uof.js";import"./remote-CF-AY8I2.js";import"./Text-Cs3EhNpG.js";import"./browser-gEDtR-OK.js";import"./EmulatedBoldText-DDNOwYGP.js";import"./Text-DE-JOko8.js";import"./utils-CQw042JL.js";import"./LoadingSpinner-DQaYydFO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./context-CW7DVTht.js";import"./Button-DhLHtzSw.js";import"./ProgressBar-D0TA1OyO.js";import"./Label-Dvi8c8U4.js";import"./Hidden-BCtaYkH3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XwramTU6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-WaW8O6jQ.js";import"./useFocus-GROhvItb.js";import"./useFocusRing-CA-tHgfv.js";import"./useFocusable-Bnc4O4Ay.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BSB41Hhw.js";import"./Dialog-COvhX_CP.js";import"./RSPContexts-CUx4KoIL.js";import"./OverlayArrow-BDs_imrE.js";import"./useControlledState-H8E68uKK.js";import"./Collection-CODju4Fo.js";import"./CollectionBuilder-CN9LptsI.js";import"./SelectionIndicator-CFfIf2cB.js";import"./Separator-BHV6nvqI.js";import"./SelectionManager-C8TGpPIB.js";import"./useEvent-NPetVyFU.js";import"./useCollator-CCOGTm23.js";import"./FocusScope-B5Ctyl2K.js";import"./VisuallyHidden-DhIewZ3I.js";import"./useControlledHostValueProps-Cis_Za3O.js";import"./useFieldComponent-D-iYVveA.js";import"./FieldDescription-i3dtwlr1.js";import"./TextField-AoRDnB9E.js";import"./FieldError-D7CvISHf.js";import"./Form-B8e0R8nB.js";import"./Group-7_zwoJgV.js";import"./Input-eh_683Iq.js";import"./useTextField-DeLc3kwF.js";import"./useFormReset-B3LvCMGn.js";import"./useFormValidation-B1svUyZM.js";import"./ActionGroupView-DUyubtpm.js";import"./Content-CP7dqr2s.js";import"./Heading-BypYnbKw.js";import"./Heading-CGZUJUiQ.js";import"./Modal-B8CAdwBg.js";import"./useOverlayController-CzdtfrCF.js";import"./Overlay-B6aX1fvL.js";import"./OverlayContextProvider-CEARkGE9.js";import"./ButtonView-DldKei58.js";import"./Flex-MfsvjoaP.js";import"./useRef-Fb7B-TJZ.js";import"./AlertText-C4ghe_z5.js";import"./AlertIcon-BkGbvGvC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),ze={title:"Integrations/React Hook Form/TextField",component:c,render:()=>{const n=async m=>{await F(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(p,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:n,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await F(2e3),children:[e.jsx(c,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
