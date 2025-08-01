import{j as e}from"./iframe-Ct0YhZ2w.js";import{A as j}from"./ActionGroup-VvPO5CPU.js";import{B as p}from"./Button-DzWxEQls.js";import{L as o}from"./Label-DV38Rr2k.js";import{S as f}from"./Section-CTfr_-XG.js";import{T as n}from"./TextField-CKRPoZIW.js";import{a as N,u as b,F,t as S}from"./Form-st-dH4Yi.js";import{s as O}from"./Action-BGsoQCTh.js";import"./PropsContextProvider-DXGdmmnh.js";import"./mergeRefs-9fQ6ccEP.js";import"./index-DiPtFLdy.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Ll0O5gVd.js";import"./useStatic-QRqKr9NZ.js";import"./IconWarning-Nibz28Ko.js";import"./Text-c1auIdYf.js";import"./browser-DfqMGCP2.js";import"./EmulatedBoldText-BinEGydl.js";import"./Text-1hz8XXbQ.js";import"./utils-ZYq7i5E4.js";import"./LoadingSpinner-BsXh4HZo.js";import"./useLocalizedStringFormatter-Di8CJoIO.js";import"./context-C170bgop.js";import"./Button-BQqMUkU2.js";import"./ProgressBar-BerxnO-h.js";import"./Label-B9yUG6H3.js";import"./Hidden-B-UfVuqf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CFRZWafb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CCIxnJPX.js";import"./useFocus-BOvvpzaY.js";import"./useFocusRing-B79RLIIn.js";import"./useFocusable-Co66UmkD.js";import"./ContextMenuSection-DVHz3eTW.js";import"./Dialog-CAIBTckX.js";import"./RSPContexts-CSqJcAwc.js";import"./OverlayArrow-Co-RMxdG.js";import"./useControlledState-BKGcljyy.js";import"./Collection-CsGYI6W2.js";import"./CollectionBuilder-BcuD1eRh.js";import"./Separator-B99z4htK.js";import"./Group-Cb0btd0m.js";import"./SearchField-BzrmJ9Dk.js";import"./FieldError-GfqWmPDy.js";import"./Form-D5t9IVHW.js";import"./useTextField-CmZz0IWu.js";import"./useFormReset-B8uzDw4w.js";import"./TextField-BZzrHcv0.js";import"./useEvent-BiRRHzhl.js";import"./SelectionManager-CdGGEfbQ.js";import"./useCollator-BztlYHwj.js";import"./FocusScope-CiY9IOxE.js";import"./VisuallyHidden-C2BGRztG.js";import"./TextFieldBase-DDUDYS0J.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B73bAD-i.js";import"./FieldDescription-DY9RVQO3.js";import"./ReactAriaControlledValueFix-B67c5BQA.js";import"./context-DgvMtz2m.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
