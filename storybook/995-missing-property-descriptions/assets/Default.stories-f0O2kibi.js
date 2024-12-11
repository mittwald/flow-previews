import{r as g,R as e}from"./index-B-o1Wr-g.js";import{L as p}from"./Label-BFoBZBqy.js";import{f,F as j}from"./FieldError-D3X6B0S8.js";import{$ as z,a as J,d as K}from"./FieldError-CjNivrvv.js";import{$ as Q,a as X}from"./Input-IHjXEmTc.js";import{c as Y}from"./utils-CCebJm36.js";import{P as G}from"./PropsContextProvider-BHq6Fnml.js";import{f as Z}from"./flowComponent-SXQnFwcy.js";import{B as c}from"./Button-D-75P3dD.js";import{S as M}from"./Section-fKtg6WpA.js";import{F as ee}from"./FieldDescription-DZLh_5SE.js";import{c as te,a as re}from"./IconApp--rto3B0B.js";import{u as oe,F as ne,t as ie}from"./Form-C21UMd_o.js";import{a as ae}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{A as le}from"./ActionGroup-B843AYgo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./index-ynQ6n1pc.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./index-DolzVqEf.js";import"./IconWarning--ZE28x2f.js";import"./useFocusRing-CTDVvBmm.js";import"./Text-CByKVUtS.js";import"./filterDOMProps-CeZl_uWj.js";import"./Wrap-DQq6jo70.js";import"./Text-CemaETXH.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./LoadingSpinner-CHM1vGyh.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./usePress-C3EQNDer.js";import"./ContextMenu.module-37Y7DEq9.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";import"./dynamic-DKDa4OpU.js";import"./Action-lrZohdE4.js";import"./context-HWij4CCA.js";import"./useSelector-iQqgW7gO.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./v4-CQkTLCs1.js";/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var se=te("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const ce="flow--file-field--trigger",me={trigger:ce},O=g.forwardRef((t,o)=>{const{children:n,isDisabled:r,onChange:i}=t,m=Y(o),d=()=>{var s,a;(s=m.current)!=null&&s.value&&(m.current.value="",i==null||i(null)),(a=m.current)==null||a.click()},h=s=>{i==null||i(s.target.files)},u={Button:{onPress:d,className:me.trigger,isDisabled:r}};return e.createElement(G,{props:u,mergeInParentContext:!0},n,e.createElement(Q,{style:{display:"none"},type:"file",ref:m,onChange:h}))});O.__docgenInfo={description:"@internal",methods:[],displayName:"FileInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const l=Z("FileField",t=>{const{children:o,refProp:n,isRequired:r,isInvalid:i,isDisabled:m,validationBehavior:d,onChange:h,...u}=t,s=g.useRef(null),a=z({value:void 0,validationBehavior:d,isInvalid:i});J({validationBehavior:d},a,s);const T=g.useMemo(()=>({...u,ref:s,"aria-invalid":a.displayValidation.isInvalid,value:void 0}),[a,r,...Object.values(u)]),U={Label:{className:f.label,optional:!t.isRequired},FieldDescription:{className:f.fieldDescription},FieldError:{className:f.customFieldError}};return e.createElement(X.Provider,{value:T},e.createElement(K.Provider,{value:a.displayValidation},e.createElement(G,{props:U},e.createElement("div",{"data-required":!!r||void 0,"data-invalid":a.displayValidation.isInvalid||void 0,className:f.formField},e.createElement(O,{ref:n,onChange:h,isDisabled:m},o)))))});l.__docgenInfo={description:"",methods:[],displayName:"FileField"};const it={title:"Form Controls/FileField",component:l,render:t=>e.createElement(l,{...t},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select"))},pe=ae("submit"),F={},E={render:t=>e.createElement(l,{...t},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select"),e.createElement(ee,null,"Supported formats: .pem, .pfx"))},v={render:t=>e.createElement(l,{...t,isInvalid:!0},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select"),e.createElement(j,null,"File too large"))},b={render:t=>e.createElement(l,{...t},e.createElement(c,{variant:"soft","aria-label":"Select certificate"},e.createElement(re,null,e.createElement(se,null))))},S={render:t=>{const[o,n]=g.useState(null),r=o==null?void 0:o[0];return e.createElement(M,null,e.createElement(l,{...t,isInvalid:!0,onChange:n},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select")),r==null?void 0:r.name)}},y={render:()=>{var n,r;const t=oe(),o=ie();return e.createElement(ne,{form:t,onSubmit:pe},e.createElement(M,null,e.createElement(o,{name:"file",rules:{required:"Please choose a file"}},e.createElement(l,{multiple:!0},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select"))),(r=(n=t.watch("file"))==null?void 0:n[0])==null?void 0:r.name,e.createElement(le,null,e.createElement(c,{type:"submit"},"Upload"))))}};var I,C,$;F.parameters={...F.parameters,docs:{...(I=F.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...($=(C=F.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var B,P,L;E.parameters={...E.parameters,docs:{...(B=E.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(L=(P=E.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var x,D,R;v.parameters={...v.parameters,docs:{...(x=v.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(R=(D=v.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,q,w;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(w=(q=b.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var N,A,_;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(A=S.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var k,H,V;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(H=y.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};const at=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{F as Default,b as IconButton,E as WithDescription,v as WithError,S as WithHandler,y as WithReactHookForm,at as __namedExportsOrder,it as default};
