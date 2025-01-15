import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as y}from"./index-Cf9XvIV_.js";import{L as p}from"./Label-wJy7v2v_.js";import{f as u,F as U}from"./FieldError-8mwjeov7.js";import{$ as z,a as J,d as K}from"./FieldError-B7sm6tD2.js";import{$ as Q,a as X}from"./Input-DycILmsb.js";import{c as Y}from"./utils-DbIpkr2E.js";import{P as k}from"./PropsContextProvider-CWFvCxZj.js";import{f as Z}from"./flowComponent-CGvK_9lq.js";import{B as l}from"./Button-D4koA9OF.js";import{S as M}from"./Section-D0LMlVKK.js";import{F as ee}from"./FieldDescription-CoTD27Aw.js";import{c as re,a as te}from"./IconApp-DoH4uGTw.js";import{u as ie,F as oe,t as ne}from"./Form-NtQQgu8f.js";import{a as se}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{A as ae}from"./ActionGroup-BRKZywLU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./index-CoqFY4cC.js";import"./Label-wrbsGWF5.js";import"./Hidden-le53pkqW.js";import"./index-Y1p7vO9S.js";import"./index-ByctJgwf.js";import"./IconWarning--dCRo9Au.js";import"./useFocusRing-Jnne1fGl.js";import"./Text-DUOeOfAn.js";import"./filterDOMProps-BSfnXAP7.js";import"./Wrap-DQq6jo70.js";import"./Text-CISO88fp.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-y-0OLV69.js";import"./LoadingSpinner-DuhR3UMI.js";import"./Button-Cft9vso-.js";import"./ProgressBar-Bu1Xugb0.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-DSRH2vY_.js";import"./usePress-6Arr-Ydv.js";import"./ContextMenuSection-CP0PU-PW.js";import"./Action-Dl4Zo7Nk.js";import"./context-DuD98iKb.js";import"./useSelector-CRM3rZ6U.js";import"./getActionGroupSlot-BgdDmpj6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Bqo6sPKA.js";import"./RSPContexts-BG_vMng8.js";import"./OverlayArrow-lBRer8YA.js";import"./useControlledState-19OAjgUP.js";import"./Collection-B01CSX5r.js";import"./CollectionBuilder-bECbC7Nm.js";import"./Separator-CAFr1tdS.js";import"./SelectionManager-BX9b8UH8.js";import"./FocusScope-B7Mz591I.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-rt50tWWG.js";import"./VisuallyHidden-DJ16t8n8.js";import"./react-children-utilities-C_p-_B4N.js";import"./useViewComponents-CqIpQeOg.js";import"./v4-CtRu48qb.js";/**
 * @license @tabler/icons-react v3.28.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var le=re("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const ce="flow--src--file-field--trigger",pe={trigger:ce},V=r=>{const{children:i,isDisabled:o,onChange:t,ref:b}=r,c=Y(b),d=()=>{var a,n;(a=c.current)!=null&&a.value&&(c.current.value="",t==null||t(null)),(n=c.current)==null||n.click()},S=a=>{t==null||t(a.target.files)},m={Button:{onPress:d,className:pe.trigger,isDisabled:o}};return e.jsxs(k,{props:m,mergeInParentContext:!0,children:[i,e.jsx(Q,{style:{display:"none"},type:"file",ref:c,onChange:S})]})};V.__docgenInfo={description:"@internal",methods:[],displayName:"FileInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""}},composes:["PropsWithChildren"]};const s=Z("FileField",r=>{const{children:i,ref:o,isRequired:t,isInvalid:b,isDisabled:c,validationBehavior:d,onChange:S,...m}=r,a=y.useRef(null),n=z({value:void 0,validationBehavior:d,isInvalid:b});J({validationBehavior:d},n,a);const G=y.useMemo(()=>({...m,ref:a,"aria-invalid":n.displayValidation.isInvalid,value:void 0}),[n,t,...Object.values(m)]),O={Label:{className:u.label,optional:!r.isRequired},FieldDescription:{className:u.fieldDescription},FieldError:{className:u.customFieldError}};return e.jsx(X.Provider,{value:G,children:e.jsx(K.Provider,{value:n.displayValidation,children:e.jsx(k,{props:O,children:e.jsx("div",{"data-required":!!t||void 0,"data-invalid":n.displayValidation.isInvalid||void 0,className:u.formField,children:e.jsx(V,{ref:o,onChange:S,isDisabled:c,children:i})})})})})});s.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"FileField"};const vr={title:"Form Controls/FileField",component:s,render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Certificate"}),e.jsx(l,{variant:"outline",color:"secondary",children:"Select"})]})},de=se("submit"),f={},F={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Certificate"}),e.jsx(l,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(ee,{children:"Supported formats: .pem, .pfx"})]})},h={render:r=>e.jsxs(s,{...r,isInvalid:!0,children:[e.jsx(p,{children:"Certificate"}),e.jsx(l,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"File too large"})]})},x={render:r=>e.jsx(s,{...r,children:e.jsx(l,{variant:"soft","aria-label":"Select certificate",children:e.jsx(te,{children:e.jsx(le,{})})})})},j={render:r=>{const[i,o]=y.useState(null),t=i==null?void 0:i[0];return e.jsxs(M,{children:[e.jsxs(s,{...r,isInvalid:!0,onChange:o,children:[e.jsx(p,{children:"Certificate"}),e.jsx(l,{variant:"outline",color:"secondary",children:"Select"})]}),t==null?void 0:t.name]})}},v={render:()=>{var o,t;const r=ie(),i=ne();return e.jsx(oe,{form:r,onSubmit:de,children:e.jsxs(M,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(s,{multiple:!0,children:[e.jsx(p,{children:"Certificate"}),e.jsx(l,{variant:"outline",color:"secondary",children:"Select"})]})}),(t=(o=r.watch("file"))==null?void 0:o[0])==null?void 0:t.name,e.jsx(ae,{children:e.jsx(l,{type:"submit",children:"Upload"})})]})})}};var g,I,C;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(C=(I=f.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var $,B,L;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(L=(B=F.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var P,D,E;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(E=(D=h.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var R,W,q;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(q=(W=x.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var w,N,A;j.parameters={...j.parameters,docs:{...(w=j.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(A=(N=j.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var H,_,T;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(T=(_=v.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const br=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{f as Default,x as IconButton,F as WithDescription,h as WithError,j as WithHandler,v as WithReactHookForm,br as __namedExportsOrder,vr as default};
