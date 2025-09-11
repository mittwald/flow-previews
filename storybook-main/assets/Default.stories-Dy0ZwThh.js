import{j as r}from"./iframe-BsMxae-o.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-B9I94qHq.js";import{L as m}from"./Link-FNIu49o-.js";import{H as s}from"./HeaderNavigation-DD3Htysw.js";import{B as o}from"./Button-DfdH0gMv.js";import{T as p}from"./Text-B7cMlOzY.js";import{I as C}from"./Image-b_RFdEca.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Cbyfdau1.js";import{a as y,C as A,M as c}from"./ContextMenuContent-C6dy7tNH.js";import"./ContextMenuSection-BPJsTYfZ.js";import{a as D,M as E}from"./Modal-7UfsOIJG.js";import{H as G}from"./Heading-YHeaSeUe.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D65IVLY2.js";import"./mergeRefs-CbyFhnfd.js";import"./index-ChzAh0kZ.js";import"./useLocalizedStringFormatter-BCH9SnbZ.js";import"./context-DrnfoIRz.js";import"./utils-BMVQSkne.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DrYqgVGE.js";import"./useFocus-HKqTfwLq.js";import"./useFocusRing-DtSDG_eK.js";import"./useFocusable-DYhRFaOI.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B-hN89-2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Cr74-zWI.js";import"./ProgressBar-D3b6UtGt.js";import"./Label-CyhUcAwc.js";import"./Hidden-BVtLBYcf.js";import"./useLabel-BvYe3LSr.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BOk4ZIfK.js";import"./EmulatedBoldText-CNMoZ52h.js";import"./Text-B7BhLbkb.js";import"./AlertIcon-DQDGIYzK.js";import"./Action-Cu5585NU.js";import"./context-BQl0W7wd.js";import"./useStatic-NxgnZ87E.js";import"./getActionGroupSlot-DrUE4wXM.js";import"./Popover-IbF6moTA.js";import"./DialogTriggerView-B1KD3q3O.js";import"./Dialog-otIdMc29.js";import"./RSPContexts-Bo0-inYM.js";import"./OverlayArrow-CRlBDhHx.js";import"./useControlledState-CcMFCsVI.js";import"./Collection-BsdihtfM.js";import"./CollectionBuilder--Y6752fw.js";import"./Separator-BgSjOnqA.js";import"./Group-CKe7hi61.js";import"./SearchField-C1j-ZqX1.js";import"./FieldError-BMEYjrX6.js";import"./Form-D5ALWCUg.js";import"./useTextField-Cy3E9Ec0.js";import"./useFormReset-CGrfLprD.js";import"./TextField-BomFOzDr.js";import"./useEvent-CzxiRkfF.js";import"./SelectionManager-DPIdiC1p.js";import"./useCollator-BG1bVIzj.js";import"./FocusScope-CZ17A4u_.js";import"./VisuallyHidden-D9PR17i6.js";import"./Switch-C8b2imoG.js";import"./Label-BYgJ_MYX.js";import"./useToggleState-C60zr7CU.js";import"./Overlay-B6htJ-Y9.js";import"./ButtonView-Df3HKrJz.js";import"./Heading-CvCiAr4K.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
