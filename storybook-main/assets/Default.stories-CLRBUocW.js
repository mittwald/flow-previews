import{j as r}from"./iframe-Dg6UnhUn.js";import{D as k,$ as S,X as b,H as v,a0 as B}from"./IconWarning-CALSlVTn.js";import{L as m}from"./Link-D5HowC75.js";import{H as s}from"./HeaderNavigation-97M9cp3D.js";import{B as o}from"./Button-B-eL7j03.js";import{T as p}from"./Text-Da0TnBkn.js";import{I as C}from"./Image-BgylQfZm.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-B0xWfO-d.js";import{a as D,C as y,M as c}from"./ContextMenuContent-Crjpp0iv.js";import"./ContextMenuSection-UOtER8VJ.js";import{a as A,M as G}from"./Modal-C8ErTyIJ.js";import{H as E}from"./Heading-BTnSvh57.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmLe5W9r.js";import"./mergeRefs-C_sTBRSK.js";import"./index-Bnuwx5Sl.js";import"./useLocalizedStringFormatter-CYRoP_gw.js";import"./context-Ddln_640.js";import"./utils-CHKT5qD6.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DRsXmFdU.js";import"./useFocus-DIqzHvRL.js";import"./useFocusRing-CS-ydpKu.js";import"./useFocusable-ByYZ8WRR.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BkZqXqCL.js";import"./Button-D1qjIKes.js";import"./ProgressBar-B038sK4e.js";import"./Label-CLbvuqlx.js";import"./Hidden-D5q0FBhK.js";import"./useLabel-CSavvckB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BdsZB4yy.js";import"./EmulatedBoldText-BNa7EikO.js";import"./Text-5OPT84ek.js";import"./AlertIcon-CxD-sr_M.js";import"./Action-dC4eDzAP.js";import"./context--SRER2Sj.js";import"./useStatic-VLWdu29U.js";import"./getActionGroupSlot-DqWqADF-.js";import"./Popover-D-cq4Rkq.js";import"./DialogTriggerView-CrN-7tsJ.js";import"./Dialog-C4HUGQZW.js";import"./RSPContexts-BHb0qNd1.js";import"./OverlayArrow-CkPauhq3.js";import"./useControlledState-BEdG5TcY.js";import"./Collection-BnM07wE2.js";import"./CollectionBuilder-Cj569hxd.js";import"./Separator-DqyAZ2vf.js";import"./Input-BLPNs6ud.js";import"./SearchField-Zy5PsrMr.js";import"./FieldError-CQt-JA7i.js";import"./Form-Dab95gIe.js";import"./Group-BGz2zD2A.js";import"./useTextField-D74XjgWw.js";import"./useFormReset-B8_ofs8-.js";import"./TextField-nXryNZh-.js";import"./SelectionManager-xbG5JbjP.js";import"./useEvent-CUClqzP3.js";import"./useCollator-DFQLuckx.js";import"./FocusScope-DgFR_sU-.js";import"./VisuallyHidden-BBKGK1WU.js";import"./Switch-DDSwh3u7.js";import"./Label-CHnnbTob.js";import"./useToggleState-DH0YEkkZ.js";import"./Overlay-BQTcmy5n.js";import"./Header-Dtv8byxP.js";import"./ButtonView-cOOKLNQP.js";import"./Heading-cOX3uo3b.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};
