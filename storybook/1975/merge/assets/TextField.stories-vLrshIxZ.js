import{j as e}from"./iframe-8yS0DUKY.js";import{A as j}from"./ActionGroup-UtRkjRc9.js";import{B as p}from"./Button-BPrvhQ-0.js";import{L as o}from"./Label-H7IJ38Py.js";import{S as f}from"./Section-BljP8Oup.js";import{T as n}from"./TextField-nII7g4sc.js";import{a as N,u as b,F,t as S}from"./Form-9753uJXW.js";import{s as O}from"./Action-DXjXZDHo.js";import"./PropsContextProvider-DEUWN1aw.js";import"./mergeRefs-CG3eH_pd.js";import"./index-ClxjEeHU.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Ci8nJPI3.js";import"./useStatic-gPbisNQz.js";import"./IconWarning-DjS1wRAW.js";import"./Text-DehAcE3E.js";import"./browser-Bz8-Zkx-.js";import"./EmulatedBoldText-BYAGMbeq.js";import"./Text-BPTsGAku.js";import"./utils-B2ScHvO6.js";import"./LoadingSpinner-S-O73py5.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-tHdZCuzA.js";import"./context-CFYUiK-W.js";import"./Button-Dg4_y2zD.js";import"./ProgressBar-BOZ4g-uB.js";import"./Label-B_LbA8zB.js";import"./Hidden-zRhskqHJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BvyXk9vA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDvWikHH.js";import"./useFocus-DkhmHBNs.js";import"./useFocusRing-TjtiHe12.js";import"./useFocusable-iysSxGPp.js";import"./ContextMenuSection-tU7Dg9xe.js";import"./Dialog-DJwy3CjE.js";import"./RSPContexts-n0reoNci.js";import"./OverlayArrow-670b0n0p.js";import"./useControlledState-DCsd5L_b.js";import"./Collection-BzYqn6pP.js";import"./CollectionBuilder-B8IFPRX1.js";import"./Separator-DXkAdAs1.js";import"./Group-AwCp0aP_.js";import"./SearchField-Brer819R.js";import"./FieldError-BJ2z3tqj.js";import"./Form-DKGWyNm8.js";import"./useTextField-dhPJvLGy.js";import"./useFormReset-DkK4PY3M.js";import"./TextField-CYgkVBJp.js";import"./useEvent-yDY_iqnF.js";import"./SelectionManager-DhO3MBuF.js";import"./useCollator-CxnDgU4L.js";import"./FocusScope-Dlq64eOc.js";import"./VisuallyHidden-DQSGeqJd.js";import"./TextFieldBase-BmhMC8uD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-RhHTJGub.js";import"./FieldDescription-CoOCqsSm.js";import"./ReactAriaControlledValueFix-DJoFc73A.js";import"./context-DZ5-b8vG.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
