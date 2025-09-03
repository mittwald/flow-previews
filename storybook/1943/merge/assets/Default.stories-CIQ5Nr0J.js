import{j as r}from"./iframe-DjexR8Tp.js";import{M as o}from"./MarkdownEditor-Di_slbrk.js";import{L as v}from"./Label-CLVda-nU.js";import{F as B}from"./FieldError-CesaJiuj.js";import{u as I,F as y,a as z}from"./Form-DVFYvkrF.js";import{B as V}from"./Button-DYqAz9Ax.js";import"./Markdown-C0vlZCqu.js";import"./CodeBlock-DtYrlyY2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-AWcdBG7k.js";import"./IconWarning-iYDgM4y1.js";import"./PropsContextProvider-CNncApHm.js";import"./mergeRefs-CBM20YoL.js";import"./index-D_XyFzRd.js";import"./Tooltip-DLaqwZ3r.js";import"./utils-T6f7ZmRV.js";import"./OverlayArrow-OIwcMk6i.js";import"./useFocus-Bu01zz1F.js";import"./ProgressBar-DpKa1PlM.js";import"./Label-Guiqn7_R.js";import"./Hidden-DuO80z64.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Ott8nG03.js";import"./context-CVxCaAZx.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-rTz5CSzi.js";import"./useFocusable-C3y7tw8Z.js";import"./useFocusRing-DmJAPvY7.js";import"./react-children-utilities-CXhtQ3PI.js";import"./Action-DUBUW5Iv.js";import"./context-DVKjoroo.js";import"./useStatic-BfaH_n72.js";import"./browser-B8Z7dOtx.js";import"./getActionGroupSlot-CoanvWNS.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-DCr69HqY.js";import"./Heading-DiglFhW3.js";import"./Heading-ByG_Ikfv.js";import"./RSPContexts-BkQTRtx0.js";import"./InlineCode-BR9D1dYA.js";import"./Link-D2ZwAdjc.js";import"./usePress-mG8JzCXO.js";import"./Separator-Ddy4jfxX.js";import"./Separator-BbijxOJI.js";import"./CollectionBuilder-CkLqU0EG.js";import"./Text-aOHzhDvr.js";import"./EmulatedBoldText-DPzl8Gjb.js";import"./Text-Xp1USGoa.js";import"./TextArea-BlVo5_vA.js";import"./TextFieldBase-B792tgOK.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CwiwIRwR.js";import"./TextField-DsmYuxt9.js";import"./FieldError-By7Lq8z0.js";import"./Form-BEAgwaeD.js";import"./Group-CtcjVW7W.js";import"./useTextField-DhOhnSWz.js";import"./useFormReset-DuzsM7E6.js";import"./ReactAriaControlledValueFix-BsvkGL9L.js";import"./LoadingSpinner-D4t9V_YE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9QzJYPZ.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const d=I({defaultValues:{message:""}});return r.jsxs(y,{form:d,onSubmit:async O=>{q(O.message),d.reset()},children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,f,F;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(F=(f=a.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var w,E,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var S,j,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var C,k,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(R=(k=n.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var _,D,W;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: ""
      }
    });
    return <Form form={form} onSubmit={async v => {
      action(v.message);
      form.reset();
    }}>
        <Field name="message" rules={{
        required: "Please enter a message"
      }}>
          <MarkdownEditor {...props}>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(W=(D=p.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Jr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Jr as __namedExportsOrder,Hr as default};
