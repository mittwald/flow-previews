import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as H}from"./index-Cf9XvIV_.js";import{L as s}from"./Label-DX3Ya1J-.js";import{F as o}from"./FileField-jPmN4XFn.js";import{B as t}from"./Button-Cz5bd543.js";import{S as P}from"./Section-CK7yj0tW.js";import{F as R}from"./FieldError-CgG9l7_n.js";import{F as k}from"./FieldDescription-FhhRhLyU.js";import{c as G,a as q}from"./IconApp-CrW8h-Rp.js";import{u as w,F as U,t as _}from"./Form-BChMqlwa.js";import{a as M}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{A as O}from"./ActionGroup-I5ApCs-p.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-BEdvHTPM.js";import"./index-CFEY-m6m.js";import"./index-ByctJgwf.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./Label-B3UarT55.js";import"./utils-DjOXyFua.js";import"./Hidden-Cfl4ctnK.js";import"./FieldError-BHbGo4IV.js";import"./useFocusRing-CvMz7Q_e.js";import"./Text-BK3pbL47.js";import"./filterDOMProps-BSfnXAP7.js";import"./Input-B6CrSN7d.js";import"./IconWarning-C3Y0rqlg.js";import"./Wrap-DQq6jo70.js";import"./Text-DcH75BF-.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./LoadingSpinner-C6bUGSry.js";import"./Button-D76OI_vo.js";import"./ProgressBar-ZJQghT0g.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CNLx9CCl.js";import"./usePress-lNW0gZrs.js";import"./ContextMenuSection-BoVGs0aM.js";import"./Action-Dnz_fKbx.js";import"./context-_K-5nSq3.js";import"./useSelector-D3mDZ6p8.js";import"./getActionGroupSlot-CY9QQgjI.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Cg9ydWeK.js";import"./RSPContexts-BG_vMng8.js";import"./OverlayArrow-DCI-Qj_s.js";import"./useControlledState-19OAjgUP.js";import"./Collection-BmK4LEIa.js";import"./CollectionBuilder-DjKT8coY.js";import"./Separator-BgTw7aj1.js";import"./SelectionManager-BEf0hUjE.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-B1faT6Ju.js";import"./FocusScope-yrzOGIns.js";import"./VisuallyHidden-EoGVKpYJ.js";import"./v4-CtRu48qb.js";/**
 * @license @tabler/icons-react v3.29.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var z=G("outline","paperclip","IconPaperclip",[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]]);const Ye={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=M("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(k,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(R,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(q,{children:e.jsx(z,{})})})})},d={render:r=>{const[n,a]=H.useState(null),i=n==null?void 0:n[0];return e.jsxs(P,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=w(),n=_();return e.jsx(U,{form:r,onSubmit:J,children:e.jsxs(P,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(O,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,v,B;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(B=(v=p.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var y,C,I;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var L,g,E;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var W,D,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Ze=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Ze as __namedExportsOrder,Ye as default};
