import{j as e}from"./iframe-F0_qnNmG.js";import{A as y}from"./ActionGroup-BwHQ3W2X.js";import{B as m}from"./Button-6GY0aJmr.js";import{L as n}from"./Label-BW-f-a9z.js";import{S as B}from"./Section-B3WAbWpL.js";import{T as o}from"./TextField-J-IZ-Ri0.js";import{a as L,u,F as c,t as N}from"./Form-CFfDByC-.js";import{s as V}from"./Action-rcgaEMhe.js";import"./index-Cun1SEai.js";import"./dynamic-Bv8wQ4eA.js";import"./flowComponent-GddMka9Q.js";import"./index-D9xEo-AP.js";import"./clsx-B-dksMZM.js";import"./index-Bz7U0goG.js";import"./getActionGroupSlot-C4q-hMJK.js";import"./useStatic-B-ONLx4H.js";import"./IconWarning-uipPPHio.js";import"./Text-DO7iLNcc.js";import"./browser-Cnb-FwPQ.js";import"./EmulatedBoldText-nQ9KrBk1.js";import"./Text-aPdZ_B4g.js";import"./utils-sDrdBfYO.js";import"./LoadingSpinner-Ct4VP7lS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DWKCNeCS.js";import"./context-BBFKgyN5.js";import"./Button-vo1xOT6L.js";import"./ProgressBar-BhbNzFL_.js";import"./Label-D-2NVJQc.js";import"./Hidden-D_DlAV2X.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0DSh--k.js";import"./useFocus-DXNQJCU_.js";import"./useFocusRing-DNaFw-NR.js";import"./useFocusable-ueFnB-zi.js";import"./ContextMenuSection-CVTYXQHy.js";import"./Dialog-DaSdBBae.js";import"./RSPContexts-B8tkrJ5_.js";import"./OverlayArrow-DJ_OxNNs.js";import"./useControlledState-DnVXKiKM.js";import"./Collection-Bb4E4fO1.js";import"./CollectionBuilder-BnV_Tl8t.js";import"./context-DsS8yj4W.js";import"./Separator-CDhUdR2K.js";import"./SelectionManager-BSSRyZsY.js";import"./useEvent-CBSm4e4D.js";import"./useCollator-CNod_Fl3.js";import"./FocusScope-BnokTE9A.js";import"./VisuallyHidden-BlAFGTlT.js";import"./TextFieldBase-CbECE_nY.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Cez4hVsO.js";import"./FieldError-Ba7AQt9l.js";import"./FieldDescription-Ib5hCrh-.js";import"./TextField-ai3fCM35.js";import"./Form-Ca0x7b6g.js";import"./Group-z3D8wTQE.js";import"./Input-DMy6iJHZ.js";import"./useTextField-CkA_A7v3.js";import"./useFormReset-yESpD6TP.js";import"./useFormValidation-CO-DTcJJ.js";import"./ReactAriaControlledValueFix-CEDZYJ47.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-BzKhkjPO.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:L,render:()=>{const i=async s=>{await V(1500),T(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(y,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const i=s=>{T(s)},r=u({defaultValues:{name:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(y,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},p={render:i=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await V(2e3),children:[e.jsx(L,{name:"email",children:e.jsx(o,{...i,type:"email",inputMode:"email",children:e.jsx(n,{children:"Email"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("email"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var d,h,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
