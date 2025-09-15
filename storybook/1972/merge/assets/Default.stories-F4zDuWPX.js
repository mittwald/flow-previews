import{j as r}from"./iframe-8yS0DUKY.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-DjS1wRAW.js";import{L as m}from"./Link-WrhoEjra.js";import{H as s}from"./HeaderNavigation-CtRaABm9.js";import{B as o}from"./Button-BPrvhQ-0.js";import{T as p}from"./Text-DehAcE3E.js";import{I as C}from"./Image-Br_slYui.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DjUVAcxv.js";import{a as y,C as A,M as c}from"./ContextMenuContent-B6SNy8ar.js";import"./ContextMenuSection-tU7Dg9xe.js";import{a as D,M as E}from"./Modal-Bnp-Yi_d.js";import{H as G}from"./Heading-DPyBWor6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DEUWN1aw.js";import"./mergeRefs-CG3eH_pd.js";import"./index-ClxjEeHU.js";import"./useLocalizedStringFormatter-tHdZCuzA.js";import"./context-CFYUiK-W.js";import"./utils-B2ScHvO6.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CDvWikHH.js";import"./useFocus-DkhmHBNs.js";import"./useFocusRing-TjtiHe12.js";import"./useFocusable-iysSxGPp.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-S-O73py5.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dg4_y2zD.js";import"./ProgressBar-BOZ4g-uB.js";import"./Label-B_LbA8zB.js";import"./Hidden-zRhskqHJ.js";import"./useLabel-BvyXk9vA.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Bz8-Zkx-.js";import"./EmulatedBoldText-BYAGMbeq.js";import"./Text-BPTsGAku.js";import"./AlertIcon-8mk9IW_x.js";import"./Action-DXjXZDHo.js";import"./context-DZ5-b8vG.js";import"./useStatic-gPbisNQz.js";import"./getActionGroupSlot-Ci8nJPI3.js";import"./Popover-CbLe9Z0k.js";import"./DialogTriggerView-U815wYkv.js";import"./Dialog-DJwy3CjE.js";import"./RSPContexts-n0reoNci.js";import"./OverlayArrow-670b0n0p.js";import"./useControlledState-DCsd5L_b.js";import"./Collection-BzYqn6pP.js";import"./CollectionBuilder-B8IFPRX1.js";import"./Separator-DXkAdAs1.js";import"./Group-AwCp0aP_.js";import"./SearchField-Brer819R.js";import"./FieldError-BJ2z3tqj.js";import"./Form-DKGWyNm8.js";import"./useTextField-dhPJvLGy.js";import"./useFormReset-DkK4PY3M.js";import"./TextField-CYgkVBJp.js";import"./useEvent-yDY_iqnF.js";import"./SelectionManager-DhO3MBuF.js";import"./useCollator-CxnDgU4L.js";import"./FocusScope-Dlq64eOc.js";import"./VisuallyHidden-DQSGeqJd.js";import"./Switch-BoA752lF.js";import"./Label-H7IJ38Py.js";import"./useToggleState-D9Qm9RWK.js";import"./Overlay-INRy2L0A.js";import"./ButtonView-M3joa-9k.js";import"./Heading-pr27gevH.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
