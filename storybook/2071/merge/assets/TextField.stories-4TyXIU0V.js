import{j as e}from"./iframe-CTxtjXon.js";import{A as y}from"./ActionGroup-CzROJviL.js";import{B as m}from"./Button-CTR-HA58.js";import{L as n}from"./Label-DtGgIyZp.js";import{S as B}from"./Section-BY4zi19G.js";import{T as o}from"./TextField-CmBgD7_f.js";import{a as L,u,F as c,t as N}from"./Form-B0b-E516.js";import{s as V}from"./Action-DoHauz19.js";import"./index-Cun1SEai.js";import"./dynamic-BqhEVzNx.js";import"./flowComponent-Cceoz8ap.js";import"./index-BzGnAInb.js";import"./clsx-B-dksMZM.js";import"./index-BCkzqzEU.js";import"./getActionGroupSlot-CRH0bVBh.js";import"./useStatic-FLOcJlac.js";import"./IconWarning-BCagwmXL.js";import"./Text-DQcec0AG.js";import"./browser-B97evyF-.js";import"./EmulatedBoldText-Da4iAST0.js";import"./Text-DVSB2R1T.js";import"./utils-Dyxd3-sq.js";import"./LoadingSpinner-ju42Rriq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B51ecTCL.js";import"./context-OuuPOLWB.js";import"./Button-BdISzqDC.js";import"./ProgressBar-CwnBBaoA.js";import"./Label-JOCFYh16.js";import"./Hidden-B6GGwvwy.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-7iMHywUA.js";import"./useFocus-DHjekZqL.js";import"./useFocusRing-w77Sy5gu.js";import"./useFocusable-C9nsuFPZ.js";import"./ContextMenuSection-BZN_5wKO.js";import"./Dialog-D2IuAywV.js";import"./RSPContexts-C8qhDI2w.js";import"./OverlayArrow-DQGSQRaj.js";import"./useControlledState-CwLLr83F.js";import"./Collection-Bj68a-ij.js";import"./CollectionBuilder-1DpsfIN0.js";import"./SelectionIndicator-DjYZoC83.js";import"./Separator-7MWrsQei.js";import"./SelectionManager-CnAC5LUd.js";import"./useEvent-VfxjGHfX.js";import"./useCollator-W6_B_X8C.js";import"./FocusScope-BV_8rP7c.js";import"./VisuallyHidden-CZsUJsM2.js";import"./TextFieldBase-Wk6xnV6T.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-yMhB6vk6.js";import"./FieldError-DPTagllN.js";import"./FieldDescription-YWOUxJnG.js";import"./TextField-DgTH4A2F.js";import"./Form-aYocGFK9.js";import"./Group-BURTQMUm.js";import"./Input-B1qknwCX.js";import"./useTextField-Y19scEG9.js";import"./useFormReset-dEYYJoAx.js";import"./useFormValidation-PRBMAw7o.js";import"./ReactAriaControlledValueFix-BxTFRqLo.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-C6LdJJW6.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:L,render:()=>{const i=async s=>{await V(1500),T(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(y,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const i=s=>{T(s)},r=u({defaultValues:{name:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(y,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},p={render:i=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await V(2e3),children:[e.jsx(L,{name:"email",children:e.jsx(o,{...i,type:"email",inputMode:"email",children:e.jsx(n,{children:"Email"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("email"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var d,h,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(g=(S=p.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const We=["Default","WithTransformedValue","WithFocusAndError"];export{a as Default,p as WithFocusAndError,l as WithTransformedValue,We as __namedExportsOrder,Ue as default};
