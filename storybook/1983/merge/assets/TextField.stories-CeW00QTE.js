import{j as e}from"./iframe-Iz-jrQ83.js";import{A as j}from"./ActionGroup-DrtwoAla.js";import{B as p}from"./Button-vOPcRaQ8.js";import{L as t}from"./Label-BLFOHaT0.js";import{S as f}from"./Section-BM0Kalgb.js";import{T as n}from"./TextField-Csst8NGq.js";import{a as V,u as b,F,t as S}from"./Form-BfqBRfyD.js";import{s as g}from"./Action-Br1QCYBe.js";import"./dynamic-Bo4plrg9.js";import"./PropsContextProvider-qg-SXpsr.js";import"./mergeRefs-B-yJitBg.js";import"./index-BEFFWu2J.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-DopO3qdD.js";import"./useStatic-D6VuC2u7.js";import"./IconWarning-BfmxR99x.js";import"./Text-Dk41Q_nF.js";import"./browser-njf7oZ8k.js";import"./EmulatedBoldText-MtcJVW3r.js";import"./Text-DcONEmQQ.js";import"./utils-Dydu0pBS.js";import"./LoadingSpinner-BKi8wNla.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CutEnP0C.js";import"./context-BdTRL7oB.js";import"./Button-P11Hto4i.js";import"./ProgressBar-xCJgXxXU.js";import"./Label-BK3HXmgw.js";import"./Hidden-BljdK-_8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BXusGe9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CAUR_6bc.js";import"./useFocus-p13hF2Sk.js";import"./useFocusRing-DSCSSA3t.js";import"./useFocusable-D1JGAIsJ.js";import"./ContextMenuSection-BPS38MvH.js";import"./Popover-BCO8-tV5.js";import"./DialogTriggerView-Ct4AgVLV.js";import"./context-DNlUm82J.js";import"./RSPContexts-BeWSySSO.js";import"./ClearPropsContextView-BFgHRwf1.js";import"./useControlledState-C1EOK33K.js";import"./FocusScope-BuNHZGqL.js";import"./useCollator-AyeBVjIE.js";import"./VisuallyHidden-BXR8MD6z.js";import"./Collection-Bghc4Zr_.js";import"./CollectionBuilder-CH12bxgH.js";import"./Separator-CTGwUbop.js";import"./Group-Dc1Igsud.js";import"./SearchField-CsOWpSNr.js";import"./FieldError-7b0XYa9_.js";import"./Form-B2pzq79_.js";import"./useTextField-c8k6OVAk.js";import"./useFormReset-Cl_PLqIc.js";import"./TextField-DzXCHFtW.js";import"./useEvent-CCByfuyl.js";import"./SelectionManager-DJ3uM6IO.js";import"./Switch-qmJ61_Ws.js";import"./useToggleState-DXGcm8AT.js";import"./TextFieldBase-CpxQbKgc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CRVd2q9t.js";import"./FieldDescription-CEUkGFJG.js";import"./ReactAriaControlledValueFix-B0uJRkpq.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ue=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ue as __namedExportsOrder,Me as default};
