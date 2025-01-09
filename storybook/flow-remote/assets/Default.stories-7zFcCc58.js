import{R as e,r as h}from"./index-BbMBc-iG.js";import{L as m}from"./Label-D6uleru1.js";import{f as u,F as j}from"./FieldError-Bxt0_Hqg.js";import{$ as z,a as J,d as K}from"./FieldError-0S5lF-We.js";import{$ as Q,a as X}from"./Input-CLGBDd3-.js";import{c as Y}from"./utils-D4Vol65q.js";import{P as M}from"./PropsContextProvider-BgoMLKZk.js";import{f as Z}from"./flowComponent-CaEd1ouJ.js";import{B as s}from"./Button-1rw05oyV.js";import{S as V}from"./Section-BDrutyMv.js";import{F as ee}from"./FieldDescription-Ca5JFBy-.js";import{c as te,a as re}from"./IconApp-B_zPpa1A.js";import{u as oe,F as ne,t as ie}from"./Form-MMscqbiO.js";import{a as ae}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{A as le}from"./ActionGroup-h4TxZ6ye.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./index-CPTjWdH1.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./index-U7Evrs-N.js";import"./IconWarning-CceziLlX.js";import"./useFocusRing-DA2rHHrb.js";import"./Text-oWh285ma.js";import"./filterDOMProps-BSfnXAP7.js";import"./Wrap-DQq6jo70.js";import"./Text-D6naXSDy.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./LoadingSpinner-y4xqeSCe.js";import"./Button-8ZRRpxMH.js";import"./ProgressBar-tRLoFn7O.js";import"./useLabel-C5NcpKQ2.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./usePress-DotMbixf.js";import"./ContextMenuSection-DFUgacLZ.js";import"./Action-CReouxgX.js";import"./context-PpKQHRcf.js";import"./useSelector-CI2pTLXu.js";import"./getActionGroupSlot-CHxkKRmy.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BQ_biHhV.js";import"./RSPContexts-CBHfX6hb.js";import"./OverlayArrow-CrZGdHWF.js";import"./useControlledState-CMnoB41k.js";import"./Collection-BUbbDiz9.js";import"./CollectionBuilder-DOwRmyqO.js";import"./Separator-CpmRlxds.js";import"./SelectionManager-DnQnei6w.js";import"./FocusScope-TaiHum7E.js";import"./useEvent-D1lr70i2.js";import"./useCollator-CzQekWjs.js";import"./VisuallyHidden-CAwLSgYE.js";import"./react-children-utilities-BBO5HXrA.js";import"./useViewComponents-DfxsYA-o.js";import"./v4-CtRu48qb.js";/**
 * @license @tabler/icons-react v3.28.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var se=te("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const ce="flow--file-field--trigger",me={trigger:ce},G=t=>{const{children:o,isDisabled:n,onChange:r,ref:y}=t,c=Y(y),p=()=>{var l,i;(l=c.current)!=null&&l.value&&(c.current.value="",r==null||r(null)),(i=c.current)==null||i.click()},g=l=>{r==null||r(l.target.files)},d={Button:{onPress:p,className:me.trigger,isDisabled:n}};return e.createElement(M,{props:d,mergeInParentContext:!0},o,e.createElement(Q,{style:{display:"none"},type:"file",ref:c,onChange:g}))};G.__docgenInfo={description:"@internal",methods:[],displayName:"FileInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""}},composes:["PropsWithChildren"]};const a=Z("FileField",t=>{const{children:o,ref:n,isRequired:r,isInvalid:y,isDisabled:c,validationBehavior:p,onChange:g,...d}=t,l=h.useRef(null),i=z({value:void 0,validationBehavior:p,isInvalid:y});J({validationBehavior:p},i,l);const O=h.useMemo(()=>({...d,ref:l,"aria-invalid":i.displayValidation.isInvalid,value:void 0}),[i,r,...Object.values(d)]),U={Label:{className:u.label,optional:!t.isRequired},FieldDescription:{className:u.fieldDescription},FieldError:{className:u.customFieldError}};return e.createElement(X.Provider,{value:O},e.createElement(K.Provider,{value:i.displayValidation},e.createElement(M,{props:U},e.createElement("div",{"data-required":!!r||void 0,"data-invalid":i.displayValidation.isInvalid||void 0,className:u.formField},e.createElement(G,{ref:n,onChange:g,isDisabled:c},o)))))});a.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"FileField"};const vt={title:"Form Controls/FileField",component:a,render:t=>e.createElement(a,{...t},e.createElement(m,null,"Certificate"),e.createElement(s,{variant:"outline",color:"secondary"},"Select"))},pe=ae("submit"),f={},F={render:t=>e.createElement(a,{...t},e.createElement(m,null,"Certificate"),e.createElement(s,{variant:"outline",color:"secondary"},"Select"),e.createElement(ee,null,"Supported formats: .pem, .pfx"))},E={render:t=>e.createElement(a,{...t,isInvalid:!0},e.createElement(m,null,"Certificate"),e.createElement(s,{variant:"outline",color:"secondary"},"Select"),e.createElement(j,null,"File too large"))},v={render:t=>e.createElement(a,{...t},e.createElement(s,{variant:"soft","aria-label":"Select certificate"},e.createElement(re,null,e.createElement(se,null))))},b={render:t=>{const[o,n]=h.useState(null),r=o==null?void 0:o[0];return e.createElement(V,null,e.createElement(a,{...t,isInvalid:!0,onChange:n},e.createElement(m,null,"Certificate"),e.createElement(s,{variant:"outline",color:"secondary"},"Select")),r==null?void 0:r.name)}},S={render:()=>{var n,r;const t=oe(),o=ie();return e.createElement(ne,{form:t,onSubmit:pe},e.createElement(V,null,e.createElement(o,{name:"file",rules:{required:"Please choose a file"}},e.createElement(a,{multiple:!0},e.createElement(m,null,"Certificate"),e.createElement(s,{variant:"outline",color:"secondary"},"Select"))),(r=(n=t.watch("file"))==null?void 0:n[0])==null?void 0:r.name,e.createElement(le,null,e.createElement(s,{type:"submit"},"Upload"))))}};var I,C,$;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...($=(C=f.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var B,L,P;F.parameters={...F.parameters,docs:{...(B=F.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(P=(L=F.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var x,D,R;E.parameters={...E.parameters,docs:{...(x=E.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(R=(D=E.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,q,w;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(w=(q=v.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var N,A,H;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(A=b.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var _,T,k;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(T=S.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const bt=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{f as Default,v as IconButton,F as WithDescription,E as WithError,b as WithHandler,S as WithReactHookForm,bt as __namedExportsOrder,vt as default};
