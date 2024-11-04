import{r as E,R as n}from"./index-Cs7sjTYM.js";import{L as F}from"./Label-Caz8bPl_.js";import{f as y,F as ae}from"./FormField.module-jlu6ugTW.js";import{d as k,c as M,l as le,i as se}from"./useFocusRing-CqFdZJbR.js";import{c as ce,b as B}from"./index-j_f0pOtZ.js";import{$ as de,c as ue}from"./FieldError-C27s8X8S.js";import{$ as me,a as pe}from"./Input-DQOx7cuX.js";import{c as fe}from"./utils-Cd8r7pc9.js";import{P as Y}from"./PropsContextProvider-CRusYdr1.js";import{f as ve}from"./flowComponent-aK1NJH1f.js";import{B as f}from"./Button-NaS3OEb0.js";import{S as Z}from"./Section-Da5IeeDg.js";import{F as be}from"./FieldDescription-Cgk00Q-U.js";import{c as $e,a as Ee}from"./IconApp-Cq7w81Gv.js";import{u as Fe,F as ye,t as ge}from"./Form-Cf-b-Fju.js";import{a as Le}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{A as he}from"./ActionGroup-BkBi4YUv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./index-Cf-03bMR.js";import"./IconWarning-Br8lrsfP.js";import"./Text-Bnjm0IRl.js";import"./filterDOMProps-CeZl_uWj.js";import"./Wrap-DQq6jo70.js";import"./Text-34Ntf1C-.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./LoadingSpinner-BjtHmDWI.js";import"./Button-DKDQv6qd.js";import"./ProgressBar-K2upHjuk.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CKybZYMg.js";import"./usePress-Dcn7RY69.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";import"./dynamic-DKDa4OpU.js";import"./Action-C08M7-Wx.js";import"./context-BaWiGzwN.js";import"./useSelector-D67vXuM3.js";import"./getActionGroupSlot-CHh0Yuh4.js";import"./v4-CQkTLCs1.js";/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Se=$e("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);let we=new Set,$=new Map,v=!1,P=!1;function x(e,r){for(let t of we)t(e,r)}function Ie(e){return!(e.metaKey||!se()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function C(e){v=!0,Ie(e)&&x("keyboard",e)}function l(e){(e.type==="mousedown"||e.type==="pointerdown")&&(v=!0,x("pointer",e))}function ee(e){le(e)&&(v=!0)}function te(e){e.target===window||e.target===document||(!v&&!P&&x("virtual",e),v=!1,P=!1)}function re(){v=!1,P=!0}function D(e){if(typeof window>"u"||$.get(M(e)))return;const r=M(e),t=k(e);let o=r.HTMLElement.prototype.focus;r.HTMLElement.prototype.focus=function(){v=!0,o.apply(this,arguments)},t.addEventListener("keydown",C,!0),t.addEventListener("keyup",C,!0),t.addEventListener("click",ee,!0),r.addEventListener("focus",te,!0),r.addEventListener("blur",re,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",l,!0),t.addEventListener("pointermove",l,!0),t.addEventListener("pointerup",l,!0)):(t.addEventListener("mousedown",l,!0),t.addEventListener("mousemove",l,!0),t.addEventListener("mouseup",l,!0)),r.addEventListener("beforeunload",()=>{ne(e)},{once:!0}),$.set(r,{focus:o})}const ne=(e,r)=>{const t=M(e),o=k(e);r&&o.removeEventListener("DOMContentLoaded",r),$.has(t)&&(t.HTMLElement.prototype.focus=$.get(t).focus,o.removeEventListener("keydown",C,!0),o.removeEventListener("keyup",C,!0),o.removeEventListener("click",ee,!0),t.removeEventListener("focus",te,!0),t.removeEventListener("blur",re,!1),typeof PointerEvent<"u"?(o.removeEventListener("pointerdown",l,!0),o.removeEventListener("pointermove",l,!0),o.removeEventListener("pointerup",l,!0)):(o.removeEventListener("mousedown",l,!0),o.removeEventListener("mousemove",l,!0),o.removeEventListener("mouseup",l,!0)),$.delete(t))};function Ce(e){const r=k(e);let t;return r.readyState!=="loading"?D(e):(t=()=>{D(e)},r.addEventListener("DOMContentLoaded",t)),()=>ne(e,t)}typeof document<"u"&&Ce();function xe(e){x(e,null)}function Be(e,r,t){let{validationBehavior:o,focus:s}=e;ce(()=>{if(o==="native"&&(t!=null&&t.current)){let a=r.realtimeValidation.isInvalid?r.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";t.current.setCustomValidity(a),t.current.hasAttribute("title")||(t.current.title=""),r.realtimeValidation.isInvalid||r.updateValidation(Pe(t.current))}});let d=B(()=>{r.resetValidation()}),u=B(a=>{var i;r.displayValidation.isInvalid||r.commitValidation();let c=t==null||(i=t.current)===null||i===void 0?void 0:i.form;if(!a.defaultPrevented&&t&&c&&ke(c)===t.current){var b;s?s():(b=t.current)===null||b===void 0||b.focus(),xe("keyboard")}a.preventDefault()}),p=B(()=>{r.commitValidation()});E.useEffect(()=>{let a=t==null?void 0:t.current;if(!a)return;let i=a.form;return a.addEventListener("invalid",u),a.addEventListener("change",p),i==null||i.addEventListener("reset",d),()=>{a.removeEventListener("invalid",u),a.removeEventListener("change",p),i==null||i.removeEventListener("reset",d)}},[t,u,p,d,o])}function Me(e){let r=e.validity;return{badInput:r.badInput,customError:r.customError,patternMismatch:r.patternMismatch,rangeOverflow:r.rangeOverflow,rangeUnderflow:r.rangeUnderflow,stepMismatch:r.stepMismatch,tooLong:r.tooLong,tooShort:r.tooShort,typeMismatch:r.typeMismatch,valueMissing:r.valueMissing,valid:r.valid}}function Pe(e){return{isInvalid:!e.validity.valid,validationDetails:Me(e),validationErrors:e.validationMessage?[e.validationMessage]:[]}}function ke(e){for(let r=0;r<e.elements.length;r++){let t=e.elements[r];if(!t.validity.valid)return t}return null}const De="flow--file-field--trigger",Ve={trigger:De},oe=E.forwardRef((e,r)=>{const{children:t,isDisabled:o,onChange:s}=e,d=fe(r),u=()=>{var i,c;(i=d.current)!=null&&i.value&&(d.current.value="",s==null||s(null)),(c=d.current)==null||c.click()},p=i=>{s==null||s(i.target.files)},a={Button:{onPress:u,className:Ve.trigger,isDisabled:o}};return n.createElement(Y,{props:a,mergeInParentContext:!0},t,n.createElement(me,{style:{display:"none"},type:"file",ref:d,onChange:p}))});oe.__docgenInfo={description:"@internal",methods:[],displayName:"FileInput"};const m=ve("FileField",e=>{const{children:r,refProp:t,isRequired:o,isInvalid:s,isDisabled:d,validationBehavior:u,onChange:p,...a}=e,i=E.useRef(null),c=de({value:void 0,validationBehavior:u,isInvalid:s});Be({validationBehavior:u},c,i);const b=E.useMemo(()=>({...a,ref:i,"aria-invalid":c.displayValidation.isInvalid,value:void 0}),[c,o,...Object.values(a)]),ie={Label:{className:y.label,optional:!e.isRequired},FieldDescription:{className:y.fieldDescription},FieldError:{className:y.customFieldError}};return n.createElement(pe.Provider,{value:b},n.createElement(ue.Provider,{value:c.displayValidation},n.createElement(Y,{props:ie},n.createElement("div",{"data-required":!!o||void 0,"data-invalid":c.displayValidation.isInvalid||void 0,className:y.formField},n.createElement(oe,{ref:t,onChange:p,isDisabled:d},r)))))});m.__docgenInfo={description:"",methods:[],displayName:"FileField"};const Bt={title:"Form Controls/FileField",component:m,render:e=>n.createElement(m,{...e},n.createElement(F,null,"Certificate"),n.createElement(f,{variant:"outline",color:"secondary"},"Select"))},Re=Le("submit"),g={},L={render:e=>n.createElement(m,{...e},n.createElement(F,null,"Certificate"),n.createElement(f,{variant:"outline",color:"secondary"},"Select"),n.createElement(be,null,"Supported formats: .pem, .pfx"))},h={render:e=>n.createElement(m,{...e,isInvalid:!0},n.createElement(F,null,"Certificate"),n.createElement(f,{variant:"outline",color:"secondary"},"Select"),n.createElement(ae,null,"File too large"))},S={render:e=>n.createElement(m,{...e},n.createElement(f,{variant:"soft","aria-label":"Select certificate"},n.createElement(Ee,null,n.createElement(Se,null))))},w={render:e=>{const[r,t]=E.useState(null),o=r==null?void 0:r[0];return n.createElement(Z,null,n.createElement(m,{...e,isInvalid:!0,onChange:t},n.createElement(F,null,"Certificate"),n.createElement(f,{variant:"outline",color:"secondary"},"Select")),o==null?void 0:o.name)}},I={render:()=>{var t,o;const e=Fe(),r=ge();return n.createElement(ye,{form:e,onSubmit:Re},n.createElement(Z,null,n.createElement(r,{name:"file",rules:{required:"Please choose a file"}},n.createElement(m,{multiple:!0},n.createElement(F,null,"Certificate"),n.createElement(f,{variant:"outline",color:"secondary"},"Select"))),(o=(t=e.watch("file"))==null?void 0:t[0])==null?void 0:o.name,n.createElement(he,null,n.createElement(f,{type:"submit"},"Upload"))))}};var V,R,O;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(O=(R=g.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var W,H,N;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(N=(H=L.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var j,A,q;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(q=(A=h.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var K,G,T;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(T=(G=S.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var U,_,z;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(_=w.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var J,Q,X;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Mt=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{g as Default,S as IconButton,L as WithDescription,h as WithError,w as WithHandler,I as WithReactHookForm,Mt as __namedExportsOrder,Bt as default};
