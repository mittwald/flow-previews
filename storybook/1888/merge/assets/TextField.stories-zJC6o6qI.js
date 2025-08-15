import{j as e}from"./iframe-CHDu_H0e.js";import{A as j}from"./ActionGroup-DIURYoSw.js";import{B as p}from"./Button-Dmc7YjrG.js";import{L as o}from"./Label-C1IZgxKk.js";import{S as f}from"./Section-DCwwIVph.js";import{T as n}from"./TextField-laeKf5dQ.js";import{a as N,u as b,F,t as S}from"./Form-J0Z5JjQu.js";import{s as O}from"./Action-BkMFmAtx.js";import"./PropsContextProvider-Z6o4UsMH.js";import"./mergeRefs-SbFyzkYd.js";import"./index-DtMG4pjF.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DDu1koB4.js";import"./useStatic-ByFeMtaE.js";import"./IconWarning-Cf1n4vGG.js";import"./Text-mNtFSOkr.js";import"./browser-mouKiHlp.js";import"./EmulatedBoldText-Bkss-Gur.js";import"./Text-DpQKzoec.js";import"./utils-DYZAD9ft.js";import"./LoadingSpinner-BjRJkl53.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B31V_hT3.js";import"./context-Bzaz4S39.js";import"./Button-Rg6_nSUL.js";import"./ProgressBar-C34PP_48.js";import"./Label-LmJ-o8gi.js";import"./Hidden-Crmdv3RK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-1w2C-Jw1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-UC_sG4c4.js";import"./useFocus-C89269kJ.js";import"./useFocusRing-BOwbbtAH.js";import"./useFocusable-vuFpOsuk.js";import"./ContextMenuSection-D6Ep8e42.js";import"./Dialog-CCYlg5iI.js";import"./RSPContexts-CZTMu11O.js";import"./OverlayArrow-BpSuH-di.js";import"./useControlledState-DzyFh4kD.js";import"./Collection-BuIb3AWp.js";import"./CollectionBuilder-CF7zY--7.js";import"./Separator-_126g1b9.js";import"./Group-DC1YgkeM.js";import"./SearchField-DemnD7Hf.js";import"./FieldError-CKgwUKxI.js";import"./Form-BFPhVCnm.js";import"./useTextField-bDvKNILe.js";import"./useFormReset-Ct9qNa2Y.js";import"./TextField-DCfchb8N.js";import"./useEvent-CII2lm4p.js";import"./SelectionManager-C-zRxePL.js";import"./useCollator-P2wX32qN.js";import"./FocusScope-CpdigEHe.js";import"./VisuallyHidden-BP6BNrRi.js";import"./TextFieldBase-BlXSpsxv.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CyvcfapH.js";import"./FieldDescription-D82FO0nU.js";import"./ReactAriaControlledValueFix-BjDFD4yr.js";import"./context-BsLhxCGe.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
