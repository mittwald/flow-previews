import{j as r}from"./iframe-B2KmHf-y.js";import{u as H,a2 as S,_ as b,E as v,a3 as B}from"./IconWarning-BfZFkMSG.js";import{L as m}from"./Link-BWw-vrJM.js";import{H as s}from"./HeaderNavigation-DCqtS0dr.js";import{B as o}from"./Button-BbFeJzIv.js";import{T as p}from"./Text-BTzROJ4u.js";import{I as C}from"./Image-BzLI4O2O.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BHQ3qws6.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CZRqxc0A.js";import"./ContextMenuSection-CTAUVaKV.js";import{a as D,M as E}from"./Modal-CnwFyIcg.js";import{H as G}from"./Heading-iOnu2cWd.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DZxLHc6o.js";import"./mergeRefs-CLz2fAhu.js";import"./index-DRuHIqI3.js";import"./useLocalizedStringFormatter-C1KZ20Nl.js";import"./context-BMg6CKyL.js";import"./utils-CGNLDjxu.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DTR6VjFp.js";import"./useFocus-BfYJCy_-.js";import"./useFocusRing-CE2mXCfJ.js";import"./useFocusable-17jCqo4h.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BqqlEuny.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DtifiV_Y.js";import"./ProgressBar-BuiHVKZg.js";import"./Label-1elQ--Nx.js";import"./Hidden-B8XFb6rR.js";import"./useLabel-p5QRldAo.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CAjTLwtK.js";import"./EmulatedBoldText-D4QqJqwf.js";import"./Text-BzjjTZNC.js";import"./AlertIcon-ivUeI69k.js";import"./Action-Cvpx0uN8.js";import"./context-U_3b6bvq.js";import"./useStatic-CZG3tzpM.js";import"./getActionGroupSlot-BF5Ft9wX.js";import"./Popover-DNk_YqrN.js";import"./DialogTriggerView-CiCobVPa.js";import"./Dialog-CNeQhTzc.js";import"./RSPContexts-D8MVQLAj.js";import"./OverlayArrow-Bl6z6NHA.js";import"./useControlledState-CjBtDVaa.js";import"./Collection-BwA2dvt3.js";import"./CollectionBuilder-BYnkarjY.js";import"./Separator-BMWcHxIk.js";import"./Group-BWIcWIx6.js";import"./SearchField-C4xC6zLO.js";import"./FieldError-DUJhKpS8.js";import"./Form-fpEywjGd.js";import"./useTextField-kEXXX66E.js";import"./useFormReset-DxoPgNRk.js";import"./TextField-qqPTWDF0.js";import"./useEvent-BZTmiYG1.js";import"./SelectionManager-D1JYq7To.js";import"./useCollator-kI-OIdrZ.js";import"./FocusScope-DhJvjcql.js";import"./VisuallyHidden-C6qwrwG6.js";import"./Switch-CUgA2Zhj.js";import"./Label-CEurSWF2.js";import"./useToggleState-_XWszdz_.js";import"./Overlay-sLwJCZHw.js";import"./ButtonView-gtGDaLdQ.js";import"./Heading-D_u-YVrE.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
