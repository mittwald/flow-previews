import{j as e}from"./iframe-MIRc1tgM.js";import{A as j}from"./ActionGroup-DBi__7rY.js";import{B as p}from"./Button-JGTIxpZE.js";import{L as t}from"./Label-6ip-YDAK.js";import{S as f}from"./Section-vX5v4wZz.js";import{T as o}from"./TextField-BoHmYxxx.js";import{a as V,u as b,F,t as S}from"./Form-CnYaB6E2.js";import{s as g}from"./Action-C4w8f-qm.js";import"./index-Cun1SEai.js";import"./dynamic-C-bCBCeB.js";import"./flowComponent-D0cKELyM.js";import"./index-nYe53ytP.js";import"./clsx-B-dksMZM.js";import"./index-Bluht812.js";import"./getActionGroupSlot-DN8d2K7y.js";import"./useStatic-4IAJfawn.js";import"./IconWarning-0xUxCYxJ.js";import"./Text-DB0aA-4n.js";import"./browser-D2aBH95U.js";import"./EmulatedBoldText-tFsrQfu_.js";import"./Text-CqfOq6kd.js";import"./utils-Wg8-dAbi.js";import"./LoadingSpinner-DiZJo45g.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DiG2EdIp.js";import"./context-7dZHwnb1.js";import"./Button-Bb1_Qr-8.js";import"./ProgressBar-DSHI0B5V.js";import"./Label-BZ6fLiSQ.js";import"./Hidden-CQtTG736.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BYf9ahG7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BoYI9IsN.js";import"./useFocus-D5-sLX53.js";import"./useFocusRing-BXtZEpMW.js";import"./useFocusable-42wCCaNx.js";import"./ContextMenuSection-T61eJ4bk.js";import"./Popover-D6qyKu9r.js";import"./DialogTriggerView-BBSm9KQL.js";import"./context-B5ID5FgA.js";import"./RSPContexts-TWbyIvJO.js";import"./ClearPropsContextView-BJ9mJsVp.js";import"./useControlledState-hbnLpfLJ.js";import"./FocusScope-CO7KUiC3.js";import"./useCollator-ChtnueVT.js";import"./VisuallyHidden-hT4NoAo3.js";import"./Collection-BF9KVqKC.js";import"./CollectionBuilder-gc2XqGfN.js";import"./context-gIAWaTnY.js";import"./Separator-CwF2l7Tl.js";import"./SelectionManager-Bb0sVVLv.js";import"./useEvent-C__VA96B.js";import"./ControlledNotification-DAn0r14w.js";import"./Switch-CTyi_YgO.js";import"./useToggleState-xo7F0lbz.js";import"./useFormReset-BLfHAfi4.js";import"./TextFieldBase-B8yJo0IK.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DXgvjoE9.js";import"./FieldError-CET0Lp84.js";import"./FieldDescription-B7e-UXQa.js";import"./TextField-BI7zaVgW.js";import"./Form-DdpQvp-N.js";import"./Group-CntKpz0M.js";import"./Input-Dq9_JaMk.js";import"./useTextField-D6znRGpk.js";import"./useFormValidation-BwYj4c-E.js";import"./ReactAriaControlledValueFix-CDVpgvAn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Ie={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async n=>{await g(1500),N(n)},m=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(o,{value:m.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{N(n)},m=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{value:m.watch("name"),onChange:n=>{m.setValue("name",n.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Pe=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Pe as __namedExportsOrder,Ie as default};
