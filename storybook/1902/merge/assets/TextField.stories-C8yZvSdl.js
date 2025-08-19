import{j as e}from"./iframe-Bgax2JY0.js";import{A as j}from"./ActionGroup-9NgnkgRF.js";import{B as p}from"./Button-DorhvjcK.js";import{L as o}from"./Label-_IXUlREC.js";import{S as f}from"./Section-Cm0021MO.js";import{T as n}from"./TextField-DrD6Gt1P.js";import{a as N,u as b,F,t as S}from"./Form-CkeGbjTN.js";import{s as O}from"./Action-BPNog73Z.js";import"./PropsContextProvider-CmOrLwYQ.js";import"./mergeRefs-1LV-M9lp.js";import"./index-B-5I2LyG.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-dcXhdsbk.js";import"./useStatic-DXnsBsC9.js";import"./IconWarning-CIEL4Pty.js";import"./Text-D6HIqkzL.js";import"./browser-CNVsKzoy.js";import"./EmulatedBoldText-CcxcoryL.js";import"./Text-BnSb9DeM.js";import"./utils-DhvHJ7nc.js";import"./LoadingSpinner-Bv666wXE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-uMxvRbqB.js";import"./context-Bb8mc0Vr.js";import"./Button-DgAfNMgE.js";import"./ProgressBar-CZQ_VFpR.js";import"./Label-qLOfPpHT.js";import"./Hidden-DMxEzFkJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-tzcBKB-Q.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-g-wt-ENC.js";import"./useFocus-Bodxhf8B.js";import"./useFocusRing-DcvKFQyA.js";import"./useFocusable-Bp4ESZkx.js";import"./ContextMenuSection-DGFiszVN.js";import"./Dialog-BurARqGL.js";import"./RSPContexts-P0zhp91u.js";import"./OverlayArrow-CYHIASrt.js";import"./useControlledState-ac1T2b60.js";import"./Collection-Dtx_2tJr.js";import"./CollectionBuilder-D9WqczC4.js";import"./Separator-DIslfa6e.js";import"./Group-YM833BDX.js";import"./SearchField-kAL_jkdT.js";import"./FieldError-DcSiOcsV.js";import"./Form-CqpGTvbl.js";import"./useTextField-B7zXE9Jf.js";import"./useFormReset-CYQ4wC1P.js";import"./TextField-CBK-xjEz.js";import"./useEvent-BaDyCPVa.js";import"./SelectionManager-CESmDrfy.js";import"./useCollator-DvCxePvq.js";import"./FocusScope-BkaPqd68.js";import"./VisuallyHidden-Dl-5RC8j.js";import"./TextFieldBase-DpCldbk4.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BFdd7cAt.js";import"./FieldDescription-0zymrVHp.js";import"./ReactAriaControlledValueFix-DXvx-PmT.js";import"./context-CPunWrMu.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Be=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Be as __namedExportsOrder,we as default};
