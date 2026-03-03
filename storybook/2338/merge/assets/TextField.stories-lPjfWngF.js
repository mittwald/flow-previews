import{r as g,j as e}from"./iframe-BZ1p44Xs.js";import{A as p}from"./ActionGroup-D6AJDGA7.js";import{B as b}from"./Button-BXzJaHaH.js";import{L as o}from"./Label-HK0aVnMe.js";import{S as h}from"./Section-DYkPYl1t.js";import{T as t}from"./TextField-WCja-bxL.js";import{a as x,u as c,F as u,R as F,S as f,t as S}from"./ResetButton-BCpb_Ry0.js";import{s as j}from"./ActionBatch-kp--iEDz.js";import{F as E}from"./FieldError-t823MHuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BvoZFGdS.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./clsx-B-dksMZM.js";import"./index-39FgH5sT.js";import"./getActionGroupSlot-D6uph6L1.js";import"./useStatic-BVYP0IGX.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./Text-CplKG2wk.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./utils-Cc2PUaBi.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-FMJg67QM.js";import"./Dialog-DlxSrM7S.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./useFieldComponent-CdmiPNAX.js";import"./FieldDescription-PY5u12Fd.js";import"./TextField-BFG4RQnU.js";import"./FieldError-DP4FZd0x.js";import"./Form-Lw3Ehme-.js";import"./Group-BUA_nOmN.js";import"./Input-Bt20yVH7.js";import"./useTextField-CmQ5R2lB.js";import"./useFormReset-zSbsyNkN.js";import"./useFormValidation-oY9u4Y5a.js";import"./ActionGroupView-CiGsVH-s.js";import"./Content-DuDYFNBO.js";import"./Heading-DAuGI7Cj.js";import"./Heading-acaQddxn.js";import"./Modal-hb6flPm1.js";import"./useOverlayController-Dfa0MUCA.js";import"./Overlay-BnwE_UHm.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./ButtonView-BwTEXUNO.js";import"./Flex-Bhdc9ark.js";import"./useRef-Cx2IQloG.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:x,render:()=>{const n=async s=>{await j(1500),y(s)},r=c({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},m={},a={render:()=>{const n=s=>{y(s)},r=c({defaultValues:{name:""}}),i=S();return e.jsx(u,{form:r,onSubmit:n,children:e.jsxs(h,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsxs(p,{children:[e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=c();return g.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsx(u,{form:n,onSubmit:async()=>await j(2e3),children:e.jsxs(h,{children:[e.jsx(x,{name:"field",children:e.jsx(t,{children:e.jsx(o,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(o,{children:"Field"}),e.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})})}},d={render:n=>{const r=c();return e.jsxs(u,{form:r,onSubmit:async()=>await j(2e3),children:[e.jsx(x,{name:"field",children:e.jsx(t,{...n,type:"email",inputMode:"email",children:e.jsx(o,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsxs(p,{children:[e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),e.jsx(b,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>r.setFocus("field"),children:"Focus through form"}),e.jsx(F,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <ResetButton slot="abort">Reset</ResetButton>
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
        <Section>
          <Field name="field">
            <TextField>
              <Label>Field</Label>
            </TextField>
          </Field>
          <TextField isInvalid>
            <Label>Field</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </TextField>
        </Section>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const ze=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{m as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ze as __namedExportsOrder,Ye as default};
