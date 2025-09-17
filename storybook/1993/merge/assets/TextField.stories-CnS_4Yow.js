import{j as e}from"./iframe-DKbVX-Q4.js";import{A as j}from"./ActionGroup-B8VdJgEq.js";import{B as p}from"./Button-DHaahZXz.js";import{L as t}from"./Label-Dr8K8otC.js";import{S as f}from"./Section-CjL3sscm.js";import{T as n}from"./TextField-BfPhSdtV.js";import{a as V,u as b,F,t as S}from"./Form-bV_0g262.js";import{s as g}from"./Action-DMnUknIz.js";import"./PropsContextProvider-jeOa0ZES.js";import"./mergeRefs-Q550Qguu.js";import"./index-C2KS530J.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BGUvfLPF.js";import"./useStatic-X0n-4EnU.js";import"./IconWarning-CwOfNeg5.js";import"./Text-BScgMmTm.js";import"./browser-f0JKU1-T.js";import"./EmulatedBoldText-GMB9n-7d.js";import"./Text-CUplgO8_.js";import"./utils-BkpHnTsU.js";import"./LoadingSpinner-nmPm0aQJ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CteVI3SD.js";import"./context-CEbk5IPs.js";import"./Button-BxBgI48c.js";import"./ProgressBar-CBmHG919.js";import"./Label-zFNLx0tV.js";import"./Hidden-D4Nr3Z2s.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xF4kjUJ4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-xBrGITaP.js";import"./useFocus-BSzVp7e_.js";import"./useFocusRing-CNTepbVZ.js";import"./useFocusable-V5Yb86R1.js";import"./ContextMenuSection-CHV2ELo8.js";import"./Dialog-CMjGRt0K.js";import"./RSPContexts-DwjCRf2W.js";import"./OverlayArrow-DI6CzN6D.js";import"./useControlledState-DPI6eaeZ.js";import"./Collection-ztGNnLcc.js";import"./CollectionBuilder-DDbAHuMc.js";import"./Separator-B52_I9Ir.js";import"./Group-9s9egjt8.js";import"./SearchField-CYyqDTIT.js";import"./FieldError-DMz-rebE.js";import"./Form-DeoxQrJ0.js";import"./useTextField-DCNHdt2S.js";import"./useFormReset-Bl7MFLhY.js";import"./TextField-Bg7pk97P.js";import"./useEvent-CpKb_F4n.js";import"./SelectionManager-egJl3JHW.js";import"./useCollator-BomaeOTE.js";import"./FocusScope-Cxy8QZEw.js";import"./VisuallyHidden-DbgH8FGV.js";import"./TextFieldBase-E01drC-x.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DmYZY-AH.js";import"./FieldDescription-DIcjPjOK.js";import"./ReactAriaControlledValueFix-BRsoMo0n.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./context-cawJMatb.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Be={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const De=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,De as __namedExportsOrder,Be as default};
