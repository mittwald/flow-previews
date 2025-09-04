import{j as r}from"./iframe-Nqcw2rDw.js";import{M as o}from"./MarkdownEditor-B5Jff4ll.js";import{L as v}from"./Label-fC6EmrAI.js";import{F as B}from"./FieldError-CQWwaXuw.js";import{u as I,F as y,a as z}from"./Form-BleG95QQ.js";import{B as V}from"./Button-Cgaohe9-.js";import"./Markdown-tFxL8G3h.js";import"./CodeBlock-DhBspKrd.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DTNR1a1Z.js";import"./IconWarning-B5Ig4VhK.js";import"./PropsContextProvider-ChoPgDKo.js";import"./mergeRefs-DwiHgjVG.js";import"./index-Cq0EiWeo.js";import"./Tooltip-mjU4isco.js";import"./utils-Bp1w5lkv.js";import"./OverlayArrow-Da2mMVHM.js";import"./useFocus-C0d_BuOG.js";import"./ProgressBar-Sv3Hk_vO.js";import"./Label-CtCba6z0.js";import"./Hidden-CAJLdDr-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DV1Mt0Tl.js";import"./context-Btv9vDKp.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cj9ITNGF.js";import"./useFocusable-C3WyBOJs.js";import"./useFocusRing-CuYhL92s.js";import"./react-children-utilities-BXi1-qEl.js";import"./Action-BKSKXcVa.js";import"./context-v3ONCW42.js";import"./useStatic-CP_9Iese.js";import"./browser-BgnnD3cg.js";import"./getActionGroupSlot-s6DAhujQ.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-mfo6vHdn.js";import"./Heading-DLlnavsX.js";import"./Heading-Bj6_gbh2.js";import"./RSPContexts-iQSSy6Xo.js";import"./InlineCode-D_Qv2qAe.js";import"./Link-BIxmoJHl.js";import"./usePress-CLwwvcX7.js";import"./Separator-DgRXbwdz.js";import"./Separator-CRfWHhtA.js";import"./CollectionBuilder-DJE4aqj-.js";import"./Text-xc4JCB-X.js";import"./EmulatedBoldText-Cwk1IhrY.js";import"./Text-CIgQjC5i.js";import"./TextArea-BbJ_7plY.js";import"./TextFieldBase-B7CIl_mw.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CXXfwgnb.js";import"./TextField--xsqEd_p.js";import"./FieldError-BpNobjrx.js";import"./Form-DdlSQ4T5.js";import"./Group-8CGiAkDp.js";import"./useTextField-B4dlVx9P.js";import"./useFormReset-CuLrpRbL.js";import"./ReactAriaControlledValueFix-DFbBCSJx.js";import"./LoadingSpinner-Bp03oye4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-qshs3T0G.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const d=I({defaultValues:{message:""}});return r.jsxs(y,{form:d,onSubmit:async O=>{q(O.message),d.reset()},children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(v,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
