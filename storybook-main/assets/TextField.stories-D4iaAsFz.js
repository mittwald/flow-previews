import{j as e}from"./iframe-8Gn-cQAI.js";import{A as y}from"./ActionGroup-DeqHAwBL.js";import{B as m}from"./Button-BYLyJZ8T.js";import{L as n}from"./Label-BKQD2yp-.js";import{S as B}from"./Section-D-_npJws.js";import{T as o}from"./TextField-o7J37_AQ.js";import{a as L,u,F as c,t as N}from"./Form-Drx3o-9i.js";import{s as V}from"./Action-HGXjP-6z.js";import"./index-Cun1SEai.js";import"./dynamic-rXbOiSCg.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./clsx-B-dksMZM.js";import"./index-UEc6MpK_.js";import"./getActionGroupSlot-DshV_Wd3.js";import"./useStatic-D4LCMNvH.js";import"./IconWarning-D4orWaCC.js";import"./Text-CaltWpnJ.js";import"./browser-BcQIid3c.js";import"./EmulatedBoldText-BFjU3iq0.js";import"./Text-YtT3E9ZO.js";import"./utils-GVjct8zS.js";import"./LoadingSpinner-DLXLBid4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./context-BNiVp3am.js";import"./Button-3o-n2ltV.js";import"./ProgressBar-Cd_i9EHd.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ITUQCIPr.js";import"./useFocus-B0X0Lu9Z.js";import"./useFocusRing-CitWdiPC.js";import"./useFocusable-D0eqHiUC.js";import"./ContextMenuSection-BSmzwpDI.js";import"./Dialog-DaZvxqJC.js";import"./RSPContexts-BLLLZDxH.js";import"./OverlayArrow-t8YkI2AY.js";import"./useControlledState-CowCOuKH.js";import"./Collection-DWEguDCp.js";import"./CollectionBuilder-9Z-fAvba.js";import"./context-OwOTZ-QT.js";import"./Separator-Dm-csSJW.js";import"./SelectionManager-CsYJeMyB.js";import"./useEvent-CbQE1MrG.js";import"./useCollator-DlUVcb0E.js";import"./FocusScope-CFCh8ZEd.js";import"./VisuallyHidden-hAbnP3vK.js";import"./TextFieldBase-C6vWj34E.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-C-zSllwf.js";import"./FieldError-BP_wpITZ.js";import"./FieldDescription-BfSaLbIT.js";import"./TextField-CGZRqELK.js";import"./Form-uqEItuxM.js";import"./Group-D6MDioP3.js";import"./Input-D8m2LMBm.js";import"./useTextField-CZZzsHWG.js";import"./useFormReset-EWszKDPA.js";import"./useFormValidation-CDT2yp15.js";import"./ReactAriaControlledValueFix-CTvHT95w.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-BIaltrhp.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:L,render:()=>{const i=async s=>{await V(1500),T(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(t,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(y,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const i=s=>{T(s)},r=u({defaultValues:{name:""}}),t=N();return e.jsx(c,{form:r,onSubmit:i,children:e.jsxs(B,{children:[e.jsx(t,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(y,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},p={render:i=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await V(2e3),children:[e.jsx(L,{name:"email",children:e.jsx(o,{...i,type:"email",inputMode:"email",children:e.jsx(n,{children:"Email"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("email"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var d,h,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,f,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
