import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CtQTiInQ.js";import{F as t}from"./FileDropZone-M_4ySimD.js";import{S as c}from"./Section-CCZkXcCk.js";import{F as d}from"./FileCardList-DBkWAwuI.js";import{F as u}from"./FileCard-CiESOAFU.js";import{u as k,F as I,t as T}from"./Form-Dqa-7B3G.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-CEu5AYHl.js";import{A as w}from"./ActionGroup-BReHs3BH.js";import"./IconApp-CRBZNQVh.js";import{h as x,i as W}from"./IconWarning-DOXxmL8u.js";import{H as F}from"./Heading-DGcDoxeu.js";import{F as f}from"./FileField-CYQs2qy7.js";import{T as E}from"./Text-gEgSdrgY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./IllustratedMessage-C3H4iw3B.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DCw3d_mi.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-DN6_Rp6A.js";import"./utils-pqn3Medm.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DfUCrkqY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-D55R0JPp.js";import"./useFocus-Csiud3ul.js";import"./useCollator-BGnAy9ct.js";import"./useLocalizedStringFormatter-ONfbUjw-.js";import"./Button-CponIIJZ.js";import"./ProgressBar-SARi2bur.js";import"./Label-BuTtJRrE.js";import"./Hidden-Dd0lSYNZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mPwC5UWg.js";import"./useFocusRing-Dj3VKvGJ.js";import"./useFocusable-D_uDDaTh.js";import"./VisuallyHidden-BArB4NIa.js";import"./ContextMenuSection-BkyB3QUj.js";import"./Action-Bf0wozDn.js";import"./context-APykQLEx.js";import"./useStatic-DqbzTIVw.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-DPD4Fb3w.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CnYyMROF.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-BoaxqqrH.js";import"./useControlledState-BKUqB07S.js";import"./Collection-Bp8QgIDg.js";import"./CollectionBuilder-CLaaElit.js";import"./Separator-DwNpDsab.js";import"./SelectionManager-D1BeontN.js";import"./useEvent-BsCm9_LL.js";import"./FocusScope-S3AisjuN.js";import"./ColumnLayout-CBmUQSbZ.js";import"./Avatar-BlXJbS7x.js";import"./react-children-utilities-DxL90CBS.js";import"./Image-CGEoCEdW.js";import"./Link-K23BjNsI.js";import"./Wrap-DQq6jo70.js";import"./FieldError-b3eTosPs.js";import"./FieldError-D1AsG0bn.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-BNNKZnfN.js";import"./Heading-CEmE2-bf.js";import"./Input-C58BIEdL.js";import"./EmulatedBoldText-D1jUzRoU.js";const er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),a={},l={args:{accept:"image/png"},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},m={args:{multiple:!0},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const i=k(),n=T();return e.jsxs(I,{form:i,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...i.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,Z,b;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(b=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};const rr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Multiple,l as WithAcceptedTypes,p as WithReactHookForm,rr as __namedExportsOrder,er as default};
