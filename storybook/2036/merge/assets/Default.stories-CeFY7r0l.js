import{j as r}from"./iframe-CxmXe-_O.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-DZNLduw-.js";import{L as m}from"./Link-C9Y1w3bE.js";import{H as s}from"./HeaderNavigation-DrZHQCyX.js";import{B as o}from"./Button-DVo7WD-1.js";import{T as p}from"./Text-BT2KT2kR.js";import{I as C}from"./Image-Bj1uA3-Y.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BkLnxkl-.js";import{b as y,C as A,M as c}from"./ContextMenuSection-qRzHMhAk.js";import{a as D,M as E}from"./Modal-Bo8kVPsA.js";import{H as G}from"./Heading-BYEzDO2o.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./context-BaUvMDTJ.js";import"./utils-Cd13syVz.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BIfsm19n.js";import"./useFocus-BpzuXZ8X.js";import"./useFocusRing-D7TcncFW.js";import"./useFocusable-CZtfPtCy.js";import"./dynamic-5AyxyhbL.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXwv69Ey.js";import"./ProgressBar-FqWf0sr1.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-fsrkaBj_.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./Text-DV04N56Q.js";import"./AlertIcon-BWYIgr4M.js";import"./Action-CKP9QlTZ.js";import"./context-CxNyIzEe.js";import"./useStatic-8bLBY8Gb.js";import"./getActionGroupSlot-IO6DOTZ-.js";import"./Popover-Boo6uHgA.js";import"./DialogTriggerView-BttboI6J.js";import"./RSPContexts-RLIssCdn.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useControlledState-y5DploKZ.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";import"./Switch-BtaIK91j.js";import"./useMakeFocusable-Doucc66J.js";import"./useToggleState-CMgWQrwt.js";import"./useFormReset-CB0PL74l.js";import"./Overlay-CtXJuiDo.js";import"./ButtonView-B6Fq-EgG.js";import"./Heading-CGtduReE.js";const zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Fr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Fr as __namedExportsOrder,zr as default};
