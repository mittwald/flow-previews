import{j as e}from"./iframe-skRbRPoL.js";import{A as y}from"./ActionGroup-DcKdxNCn.js";import{B as m}from"./Button-Dz0DuBiT.js";import{L as o}from"./Label-Cq3I2A96.js";import{S as B}from"./Section-DOyYK0OC.js";import{T as n}from"./TextField-CGngEpQn.js";import{a as L,u,F as c,t as N}from"./Form-Bp5psqD5.js";import{s as V}from"./Action-BwiD4nix.js";import"./index-Cun1SEai.js";import"./dynamic-CBZdW0rY.js";import"./PropsContextProvider-D-E9sUQW.js";import"./mergeRefs-BKTGVx17.js";import"./index-CXI9rWZp.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-DYUIykqS.js";import"./useStatic-DAiG3iJH.js";import"./IconWarning-DXpZ8EkD.js";import"./Text-CrBUObvU.js";import"./browser-5dwj1raN.js";import"./EmulatedBoldText-bw_ADscr.js";import"./Text-CUtREENU.js";import"./utils-BGdTTFGe.js";import"./LoadingSpinner-DNyrAbcW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CwRDR58d.js";import"./context-BDj_8DgP.js";import"./Button-BwtVAxMD.js";import"./ProgressBar-OmNCHxSP.js";import"./Label-BZeHbbby.js";import"./Hidden-CDt-bii7.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEGjP4QC.js";import"./useFocus-CV5tS3zW.js";import"./useFocusRing-DlSXTuap.js";import"./useFocusable-CCkYWWjg.js";import"./ContextMenuSection-Bs_nt5W1.js";import"./Popover-DZXUsAhj.js";import"./DialogTriggerView-CvcPrbY8.js";import"./context-BgdpZ9Nh.js";import"./RSPContexts-x0Tynp33.js";import"./ClearPropsContextView-mAWKRp53.js";import"./useControlledState-D1OKWRDf.js";import"./FocusScope-CC4fXxOZ.js";import"./useCollator-KwZeuNwe.js";import"./VisuallyHidden-BpSio_rc.js";import"./Collection-CRLgXtsT.js";import"./CollectionBuilder-wU1sry9x.js";import"./context-Bs3ecAZ9.js";import"./Separator-CtW8b_yz.js";import"./SelectionManager-B23tCYpi.js";import"./useEvent-C3cKfFZ7.js";import"./Switch-B4JasYcK.js";import"./useMakeFocusable-Vdb5-otp.js";import"./useToggleState-CGi4neW0.js";import"./useFormReset-i0yRktMd.js";import"./TextFieldBase-DoN5p5B1.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bawolgzq.js";import"./FieldError-CQn8D9rY.js";import"./FieldDescription-D6SY3-DN.js";import"./TextField-PYB9-DEX.js";import"./Form-B2_iaNmT.js";import"./Group-BpjaHcFI.js";import"./Input-B5CQfP72.js";import"./useTextField-COBl652h.js";import"./useFormValidation-C1IjZLpu.js";import"./ReactAriaControlledValueFix-C0F2IYAO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),ke={title:"Integrations/React Hook Form/TextField",component:L,render:()=>{const i=async s=>{await V(1500),T(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsx(t,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsxs(y,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const i=s=>{T(s)},r=u({defaultValues:{name:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(y,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},p={render:i=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await V(2e3),children:[e.jsx(L,{name:"email",children:e.jsx(n,{...i,type:"email",inputMode:"email",children:e.jsx(o,{children:"Email"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("email"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var d,h,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
            <Button type="submit">Submit</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var b,S,g;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"email"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Email</Label>
          </TextField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("email", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("email")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(g=(S=p.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const He=["Default","WithTransformedValue","WithFocusAndError"];export{a as Default,p as WithFocusAndError,l as WithTransformedValue,He as __namedExportsOrder,ke as default};
