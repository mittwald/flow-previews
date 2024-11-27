import{r as g,R as e}from"./index-B-o1Wr-g.js";import{L as p}from"./Label-BtWZg8ae.js";import{f,F as z}from"./FormField.module-BslP3nb7.js";import{$ as J,a as K,d as Q}from"./FieldError-CjNivrvv.js";import{$ as T,a as X}from"./Input-IHjXEmTc.js";import{c as Y}from"./utils-CCebJm36.js";import{P as G}from"./PropsContextProvider-DWb7RnwM.js";import{f as Z}from"./flowComponent-B1Fj-awS.js";import{B as c}from"./Button-BawBGXwF.js";import{S as M}from"./Section-xbqQsxJi.js";import{F as ee}from"./FieldDescription-CTfLp2Pq.js";import{c as te,a as re}from"./IconApp-DUZeHGmy.js";import{u as oe,F as ne,t as ie}from"./Form-BQUC9U3x.js";import{a as ae}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{A as le}from"./ActionGroup-DY2rlMWN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./index-ynQ6n1pc.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./index-DolzVqEf.js";import"./IconWarning-DX-MxN6U.js";import"./useFocusRing-CTDVvBmm.js";import"./Text-CByKVUtS.js";import"./filterDOMProps-CeZl_uWj.js";import"./Wrap-DQq6jo70.js";import"./Text-DvGTF8ok.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./LoadingSpinner-tkxeQV45.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./usePress-C3EQNDer.js";import"./ContextMenu.module-BwWWXB6J.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";import"./dynamic-DKDa4OpU.js";import"./Action-BF9-T2Zi.js";import"./context-DrrNXb0U.js";import"./useSelector-CG6WqQ-3.js";import"./getActionGroupSlot-DvUW2Yot.js";import"./v4-CQkTLCs1.js";/**
 * @license @tabler/icons-react v3.22.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var se=te("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const ce="flow--file-field--trigger",me={trigger:ce},O=g.forwardRef((t,o)=>{const{children:n,isDisabled:r,onChange:i}=t,m=Y(o),d=()=>{var s,a;(s=m.current)!=null&&s.value&&(m.current.value="",i==null||i(null)),(a=m.current)==null||a.click()},h=s=>{i==null||i(s.target.files)},u={Button:{onPress:d,className:me.trigger,isDisabled:r}};return e.createElement(G,{props:u,mergeInParentContext:!0},n,e.createElement(T,{style:{display:"none"},type:"file",ref:m,onChange:h}))});O.__docgenInfo={description:"@internal",methods:[],displayName:"FileInput"};const l=Z("FileField",t=>{const{children:o,refProp:n,isRequired:r,isInvalid:i,isDisabled:m,validationBehavior:d,onChange:h,...u}=t,s=g.useRef(null),a=J({value:void 0,validationBehavior:d,isInvalid:i});K({validationBehavior:d},a,s);const U=g.useMemo(()=>({...u,ref:s,"aria-invalid":a.displayValidation.isInvalid,value:void 0}),[a,r,...Object.values(u)]),j={Label:{className:f.label,optional:!t.isRequired},FieldDescription:{className:f.fieldDescription},FieldError:{className:f.customFieldError}};return e.createElement(X.Provider,{value:U},e.createElement(Q.Provider,{value:a.displayValidation},e.createElement(G,{props:j},e.createElement("div",{"data-required":!!r||void 0,"data-invalid":a.displayValidation.isInvalid||void 0,className:f.formField},e.createElement(O,{ref:n,onChange:h,isDisabled:m},o)))))});l.__docgenInfo={description:"",methods:[],displayName:"FileField"};const it={title:"Form Controls/FileField",component:l,render:t=>e.createElement(l,{...t},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select"))},pe=ae("submit"),F={},E={render:t=>e.createElement(l,{...t},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select"),e.createElement(ee,null,"Supported formats: .pem, .pfx"))},v={render:t=>e.createElement(l,{...t,isInvalid:!0},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select"),e.createElement(z,null,"File too large"))},b={render:t=>e.createElement(l,{...t},e.createElement(c,{variant:"soft","aria-label":"Select certificate"},e.createElement(re,null,e.createElement(se,null))))},S={render:t=>{const[o,n]=g.useState(null),r=o==null?void 0:o[0];return e.createElement(M,null,e.createElement(l,{...t,isInvalid:!0,onChange:n},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select")),r==null?void 0:r.name)}},y={render:()=>{var n,r;const t=oe(),o=ie();return e.createElement(ne,{form:t,onSubmit:pe},e.createElement(M,null,e.createElement(o,{name:"file",rules:{required:"Please choose a file"}},e.createElement(l,{multiple:!0},e.createElement(p,null,"Certificate"),e.createElement(c,{variant:"outline",color:"secondary"},"Select"))),(r=(n=t.watch("file"))==null?void 0:n[0])==null?void 0:r.name,e.createElement(le,null,e.createElement(c,{type:"submit"},"Upload"))))}};var I,$,B;F.parameters={...F.parameters,docs:{...(I=F.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(B=($=F.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var C,P,x;E.parameters={...E.parameters,docs:{...(C=E.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(x=(P=E.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var L,D,R;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(R=(D=v.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,N,A;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(A=(N=b.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var _,q,w;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(q=S.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var k,H,V;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
