import{j as e}from"./iframe-Dyev7uqQ.js";import{A as y}from"./ActionGroup-Cif2aV44.js";import{B as m}from"./Button-M1gfFqsi.js";import{L as n}from"./Label-DTUVPi2K.js";import{S as B}from"./Section-BfDLZAnd.js";import{T as o}from"./TextField-ArXVMX3U.js";import{a as L,u,F as c,t as N}from"./Form-Gu8_mx9R.js";import{s as V}from"./Action-B4ax4ap7.js";import"./index-Cun1SEai.js";import"./dynamic-BE-yoA5C.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./clsx-B-dksMZM.js";import"./index-CvZL7rFv.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./useStatic-Bud3ojrW.js";import"./IconWarning-Bsmw3ttA.js";import"./Text-DCNvFKD8.js";import"./browser-ChaPEiup.js";import"./EmulatedBoldText-DLRRZTZj.js";import"./Text-s2lACfdw.js";import"./utils-xAJ0Toj9.js";import"./LoadingSpinner-B-dR1bVB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./context-z-HIZVd9.js";import"./Button-bK5LqQIE.js";import"./ProgressBar-DcFpY2St.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DabLIItt.js";import"./useFocus-D9hOsqQc.js";import"./useFocusRing-Bh9Ki2YC.js";import"./useFocusable-uBBnOUX9.js";import"./ContextMenuSection-8BAKg1zJ.js";import"./Dialog-BJ5ZUOL1.js";import"./RSPContexts-CLj3WTCR.js";import"./OverlayArrow-BiwtfbnF.js";import"./useControlledState-Cwb3iJ3d.js";import"./Collection-BT_5iu3o.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./context-xoyjw4Qx.js";import"./Separator-Cv2eEaeb.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./useCollator-BcWYCPX5.js";import"./FocusScope-BBXHLeS0.js";import"./VisuallyHidden-BtDNzz4I.js";import"./TextFieldBase-DWJUsyWD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BvGSOrPS.js";import"./FieldError-Nbp5sqjA.js";import"./FieldDescription-B0vuMjWm.js";import"./TextField-BaYoK8D6.js";import"./Form-DM5JENEN.js";import"./Group-Bx2wIJZm.js";import"./Input-D9REckIy.js";import"./useTextField-B5EVwJKx.js";import"./useFormReset-CiUCuSgO.js";import"./useFormValidation-BpwVeG4s.js";import"./ReactAriaControlledValueFix-B2iOgium.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-C27PnH24.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:L,render:()=>{const i=async s=>{await V(1500),T(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(y,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const i=s=>{T(s)},r=u({defaultValues:{name:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(y,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},p={render:i=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await V(2e3),children:[e.jsx(L,{name:"email",children:e.jsx(o,{...i,type:"email",inputMode:"email",children:e.jsx(n,{children:"Email"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("email"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var d,h,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
